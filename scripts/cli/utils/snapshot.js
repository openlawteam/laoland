const {
  buildDraftMessage,
  buildProposalMessage,
  getDomainDefinition,
  getSpace,
  prepareDraftMessage,
  prepareProposalMessage,
  signMessage,
  SnapshotMessageBase,
  SnapshotMessageProposal,
  SnapshotProposalData,
  SnapshotSubmitBaseReturn,
  SnapshotSubmitProposalReturn,
  SnapshotType,
  submitMessage,
} = require("@openlaw/snapshot-js-erc712");

const ContractDAOConfigKeys = {
  offchainVotingGracePeriod: "offchainvoting.gracePeriod",
  offchainVotingStakingAmount: "offchainvoting.stakingAmount",
  offchainVotingVotingPeriod: "offchainvoting.votingPeriod",
  onboardingChunkSize: "onboarding.chunkSize",
  onboardingMaximumChunks: "onboarding.maximumChunks",
  onboardingUnitsPerChunk: "onboarding.unitsPerChunk",
  onboardingTokenAddr: "onboarding.tokenAddr",
  votingGracePeriod: "voting.gracePeriod",
  votingStakingAmount: "voting.stakingAmount",
  votingVotingPeriod: "voting.votingPeriod",
};




if (!process.env.SNAPSHOT_HUB_API_URL)
  throw Error("Missing env var: <SNAPSHOT_HUB_API_URL>");

const buildProposalMessageHelper = async (commonData, daoRegistry) => {
  const snapshot = 1; //await web3Instance.eth.getBlockNumber();

  const votingTimeSeconds = parseInt(
    await getDAOConfigEntry(
      ContractDAOConfigKeys.offchainVotingVotingPeriod,
      daoRegistry
    )
  );

  return await buildProposalMessage(
    {
      ...commonData,
      votingTimeSeconds,
      snapshot,
    },
    process.env.SNAPSHOT_HUB_API_URL
  );
};

const signAndSendProposal = async (proposal, provider, signerAddress) => {
  const { partialProposalData, adapterAddress, type, space } = proposal;

  const actionId = adapterAddress;

  const { body, name, metadata, timestamp } = partialProposalData;

  let { data } = await getSpace(process.env.SNAPSHOT_HUB_API_URL, space);

  const commonData = {
    name,
    body,
    metadata,
    token: data.token,
    space,
  };

  // 1. Check proposal type and prepare appropriate message
  const message =
    type === SnapshotType.draft
      ? await buildDraftMessage(commonData, process.env.SNAPSHOT_HUB_API_URL)
      : await buildProposalMessageHelper({
          ...commonData,
          timestamp,
        });

  // 2. Prepare signing data. Snapshot and the contracts will verify this same data against the signature.
  const erc712Message =
    type === SnapshotType.draft
      ? prepareDraftMessage(message)
      : prepareProposalMessage(message);

  const { domain, types } = getDomainDefinition(
    { ...erc712Message, type },
    daoRegistryAddress,
    actionId,
    1337 // FIXME read it from env?
  );

  // 3. Sign data
  const signature = await signMessage(
    provider,
    signerAddress,
    JSON.stringify({
      types,
      domain,
      primaryType: "Message",
      message: erc712Message,
    })
  );

  // 4. Send data to snapshot-hub
  const resp = await submitMessage(
    process.env.SNAPSHOT_HUB_API_URL,
    account,
    message,
    signature,
    {
      actionId: domain.actionId,
      chainId: domain.chainId,
      verifyingContract: domain.verifyingContract,
      message: erc712Message,
    }
  );

  return {
    data: message,
    signature,
    uniqueId: resp.data.uniqueId,
    uniqueIdDraft: resp.data.uniqueIdDraft || "",
  };
};

const newProposal = async (
  title,
  description,
  dao,
  space,
  provider,
  signerAddress
) => {
  // Sign and submit proposal for Snapshot Hub
  const { uniqueId } = await signAndSendProposal(
    {
      partialProposalData: {
        name: title,
        body: description,
        metadata: {
          type: "Governance",
        },
      },
      type: SnapshotType.proposal,
      space,
    },
    provider,
    signerAddress,
    dao
  );
  console.log(`New snapshot proposal created: ${uniqueId}`);
  return uniqueId;
};

module.exports = { newProposal };
