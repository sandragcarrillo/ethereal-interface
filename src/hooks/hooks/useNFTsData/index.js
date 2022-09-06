import { useCallback, useEffect, useState } from "react";
import useNFTs from "../useNFTs";

const getPunkData = async ({ CrazyNFTs, tokenId }) => {
  const [
    tokenURI,
    dna,
    owner,
    accessoriesType,
    clotheColor,
    clotheType,
    eyeType,
    eyeBrowType,
    facialHairColor,
    facialHairType,
    hairColor,
    hatColor,
    graphicType,
    mouthType,
    skinColor,
    topType,
  ] = await Promise.all([
    CrazyNFTs.methods.tokenURI(tokenId).call(),
    CrazyNFTs.methods.tokenDNA(tokenId).call(),
    CrazyNFTs.methods.ownerOf(tokenId).call(),
    CrazyNFTs.methods.getClotheColor(tokenId).call(),
    CrazyNFTs.methods.getClotheType(tokenId).call(),
    CrazyNFTs.methods.getEyeType(tokenId).call(),
    CrazyNFTs.methods.getEyeBrowType(tokenId).call(),
    CrazyNFTs.methods.getFacialHairColor(tokenId).call(),
    CrazyNFTs.methods.getFacialHairType(tokenId).call(),
    CrazyNFTs.methods.getHairColor(tokenId).call(),
    CrazyNFTs.methods.getHatColor(tokenId).call(),
    CrazyNFTs.methods.getGraphicType(tokenId).call(),
    CrazyNFTs.methods.getMouthType(tokenId).call(),
    CrazyNFTs.methods.getSkinColor(tokenId).call(),
    CrazyNFTs.methods.getTopType(tokenId).call(),
  ]);

  const responseMetadata = await fetch(tokenURI);
  const metadata = await responseMetadata.json();

  return {
    tokenId,
    attributes: {
      accessoriesType,
      clotheColor,
      clotheType,
      eyeType,
      eyeBrowType,
      facialHairColor,
      facialHairType,
      hairColor,
      hatColor,
      graphicType,
      mouthType,
      skinColor,
      topType,
    },
    tokenURI,
    dna,
    owner,
    ...metadata,
  };
};

// Plural
const useNFTsData = () => {
  const [punks, setPunks] = useState([]);
  const [loading, setLoading] = useState(true);
  const CrazyNFTs = useNFTs();

  const update = useCallback(async () => {
    if (CrazyNFTs) {
      setLoading(true);

      let tokenIds;

      const totalSupply = await CrazyNFTs.methods.totalSupply().call();
      tokenIds = new Array(Number(totalSupply)).fill().map((_, index) => index);

      const punksPromise = tokenIds.map((tokenId) =>
        getPunkData({ tokenId, CrazyNFTs })
      );

      const punks = await Promise.all(punksPromise);

      setPunks(punks);
      setLoading(false);
    }
  }, [CrazyNFTs]);

  useEffect(() => {
    update();
  }, [update]);

  return {
    loading,
    punks,
    update,
  };
};

// Singular
const useNFTData = (tokenId = null) => {
  const [NFT, setNFT] = useState({});
  const [loading, setLoading] = useState(true);
  const CrazyNFTs = useNFTs();

  const update = useCallback(async () => {
    if (CrazyNFTs && tokenId != null) {
      setLoading(true);

      const toSet = await getPunkData({ tokenId, CrazyNFTs });
      setNFT(toSet);

      setLoading(false);
    }
  }, [CrazyNFTs, tokenId]);

  useEffect(() => {
    update();
  }, [update]);

  return {
    loading,
    NFT,
    update,
  };
};

export { useNFTsData, useNFTData };