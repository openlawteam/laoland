const { ethers } = require("ethers");
const toBytes32 = ethers.utils.formatBytes32String;
const { sha3, fromAscii } = require("../../../utils/ContractUtil");
const { entryDao, parseDaoFlags } = require("../../../utils/DeploymentUtil");
const { getContract } = require("../utils/contract");
const { newProposal } = require("../utils/snapshot");

const newManagingProposal = async (
  opts,
  proposalId,
  adapterName,
  adapterAddress,
  keys,
  values,
  aclFlags,
  data
) => {
  console.log(`New managing proposal`);
  console.log(`\tNetwork:\t\t${opts.network}`);
  console.log(`\tDAO:\t\t\t${opts.dao}`);
  console.log(`\tSpace:\t\t\t${opts.space}`);
  console.log(`\tManagingContract:\t${opts.contract}`);
  console.log(`\tProposalId:\t\t${proposalId}`);
  console.log(`\tAdapter:\t\t${adapterName} @ ${adapterAddress}`);
  console.log(`\tAccessFlags:\t\t${aclFlags}`);
  console.log(`\tKeys:\t\t\t${keys}`);
  console.log(`\tValues:\t\t\t${values}`);
  console.log(`\tData:\t\t\t${data}`);

  const configKeys = keys.split(",").map((k) => toBytes32(k));
  const configValues = values.split(",").map((v) => v);

  const { contract, provider, wallet } = getContract(
    "ManagingContract",
    opts.network,
    opts.contract
  );

  const uniqueId = await newProposal(
    `Update adapter: ${adapterName}`,
    "Creates or update an adapter",
    opts.dao,
    opts.space,
    provider,
    wallet.address
  );

  await contract.submitProposal(
    opts.dao,
    toBytes32(proposalId),
    {
      adapterId: sha3(adapterName),
      adapterAddress: adapterAddress,
      flags: entryDao(
        adapterName,
        { address: adapterAddress },
        parseDaoFlags(aclFlags)
      ).flags,
    },
    configKeys,
    configValues,
    data ? fromAscii(data) : []
  );
};

module.exports = { newManagingProposal };
