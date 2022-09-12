import Web3 from "web3";
import ContractArtifact from "../config/web3/artifacts/EtherealVotations";

class Web3Method {
  constructor(provider, chainId) {
    this.address = ContractArtifact.address;
    this.abi = ContractArtifact.abi;
    this.web3 = new Web3(provider);
    this.contract = new this.web3.eth.Contract(this.abi, this.address[chainId]);
  }

  async proposalId() {
    const proposalId = await this.contract.methods.proposalId().call();
    return Number(proposalId);
  }

  async votesForUserExperience() {
    const votesForUserExperience = await this.contract.methods.votesForUserExperience().call();
    return Number(votesForUserExperience);
  }

  async votesForLiderazgo() {
    const votesForLiderazgo = await this.contract.methods.votesForLiderazgo().call();
    return Number(votesForLiderazgo);
  }

  async getVote() {
    const accounts = await this.web3.eth.getAccounts();
    const vote = await this.contract.methods.getVote(accounts[0]).call();
    return Number(vote) || undefined;
  }

  async vote(vote) {
    const accounts = await this.web3.eth.getAccounts();
    const receipt = await this.contract.methods.vote(vote).send({
      from: accounts[0],
      value: Web3.utils.toWei,
    });

    return receipt.transactionHash;
  }
}

export default Web3Method;