/**
MIT License

Copyright (c) 2020 Openlaw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */
const sha3 = web3.utils.sha3;
const toBN = web3.utils.toBN;
const {advanceTime, createDao, GUILD, SHARES, sharePrice, OnboardingContract, VotingContract, FinancingContract, ETH_TOKEN} = require('../../utils/DaoFactory.js');
const remaining = sharePrice.sub(toBN('50000000000000'));

contract('LAOLAND - Financing Adapter', async accounts => {
  
  it("should be possible to any individual to request financing", async () => {
    const myAccount = accounts[1];
    const applicant = accounts[2];
    const newMember = accounts[3];

    let dao = await createDao(myAccount);

    const votingAddress = await dao.getAdapterAddress(sha3("voting"));
    const voting = await VotingContract.at(votingAddress);

    const financingAddress = await dao.getAdapterAddress(sha3("financing"));
    const financing = await FinancingContract.at(financingAddress);

    //Add funds to the Guild Bank after sposoring a member to join the Guild
    const onboardingAddress = await dao.getAdapterAddress(sha3('onboarding'));
    const onboarding = await OnboardingContract.at(onboardingAddress);
    await onboarding.onboard(dao.address, SHARES, sharePrice.mul(toBN(10)).add(remaining), { from: newMember, value: sharePrice.mul(toBN(10)).add(remaining), gasPrice: toBN("0") });

    //Get the new proposal id
    pastEvents = await dao.getPastEvents();
    let { proposalId }  = pastEvents[0].returnValues;
    assert.equal(proposalId, "0", "invalid proposal id");

    //Sponsor the new proposal, vote and process it
    await onboarding.sponsorProposal(dao.address, proposalId, [], { from: myAccount, gasPrice: toBN("0") });
    await voting.submitVote(dao.address, proposalId, 1, { from: myAccount, gasPrice: toBN("0") });
    await advanceTime(10000);
    await onboarding.processProposal(dao.address, proposalId, { from: myAccount, gasPrice: toBN("0") });
    //Check Guild Bank Balance
    let guildBalance = await dao.balanceOf(GUILD, ETH_TOKEN);
    let expectedGuildBalance = toBN("1200000000000000000");
    assert.equal(guildBalance.toString(), expectedGuildBalance.toString());

    //Create Financing Request
    let requestedAmount = toBN(50000);
    await financing.createFinancingRequest(dao.address, applicant, ETH_TOKEN, requestedAmount, web3.utils.fromUtf8(""));
    
    //Get the new proposalId from event log
    pastEvents = await dao.getPastEvents();
    proposalId = pastEvents[0].returnValues.proposalId;
    assert.equal(proposalId, 1);

    //Member sponsors the Financing proposal
    await financing.sponsorProposal(dao.address, proposalId, [], { from: myAccount, gasPrice: toBN("0") });

    //Member votes on the Financing proposal
    await voting.submitVote(dao.address, proposalId, 1, { from: myAccount, gasPrice: toBN("0") });

    //Check applicant balance before Financing proposal is processed
    let applicantBalance = await dao.balanceOf(applicant, ETH_TOKEN);
    assert.equal(toBN(applicantBalance).toString(), "0".toString());
    
    //Process Financing proposal after voting
    await advanceTime(10000);
    await financing.processProposal(dao.address, proposalId, { from: myAccount, gasPrice: toBN("0") });

    //Check Guild Bank balance to make sure the transfer has happened
    guildBalance = await dao.balanceOf(GUILD, ETH_TOKEN);
    assert.equal(toBN(guildBalance).toString(), expectedGuildBalance.sub(requestedAmount).toString());

    //Check the applicant token balance to make sure the funds are available in the bank for the applicant account
    applicantBalance = await dao.balanceOf(applicant, ETH_TOKEN);
    assert.equal(toBN(applicantBalance).toString(), requestedAmount.toString());
  })
});