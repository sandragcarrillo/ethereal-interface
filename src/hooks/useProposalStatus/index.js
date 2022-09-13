import { useToast } from "@chakra-ui/react";
//import { useWeb3React } from "@web3-react/core";
import { useState, useMemo } from "react";
import { usePercent } from "../useTruncatedAddress";
import web3 from "web3";

const useProposalStatus = () => {
    //const {  chainId, active } = useWeb3React();
  const [positiveVotes, setPositiveVotes] = useState(0);
  const [negativesVotes, setNegativeVotes] = useState(0);
  const [voting, setVoting] = useState(false);
  const [isVoted, setIsVoted] = useState(false);

  const getData = async () => {
    let web3;

    const [votesForUserExperience, votesForLiderazgo, voted] = await Promise.all([
        web3.votesForUserExperience(),
        web3.votesForLiderazgo(),
        web3.getVote(),
      ]);
      setNegativeVotes(votesForLiderazgo);
      setPositiveVotes(votesForUserExperience);
      setIsVoted(voted !== undefined);
  };

//   useMemo(() => {
//     getData();
//   },[ chainId, active]);

  const toast = useToast();

  const handleVote = async (vote) => {
    setVoting(true);
    try {
      const txHash = await web3.vote(vote);
      toast({
        title: "Vote emitted",
        description: txHash,
        status: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error has ocurred",
        status: "error",
      });
    }
    getData();
    setVoting(false);
  };

  const percentUserExperience = usePercent(positiveVotes, positiveVotes + negativesVotes);
  const percentLiderazgo = usePercent(negativesVotes, positiveVotes + negativesVotes);

  return {
    positiveVotes,
    percentUserExperience,
    percentLiderazgo,
    negativesVotes,
    voting,
    isVoted,
    handleVote
  };
};

export default useProposalStatus;