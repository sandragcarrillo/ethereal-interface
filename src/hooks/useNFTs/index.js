import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import NFTsArtifact from "../../config/web3/artifacts/CrazyNFTs";

const { address, abi } = NFTsArtifact;

const useNFTs = () => {
  const { active, library, chainId } = useWeb3React();

  const CrazyNFTs = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId]);
  }, [active, chainId, library?.eth?.Contract]);

  return CrazyNFTs;
};

export default useNFTs;