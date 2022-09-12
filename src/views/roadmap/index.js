import { useWeb3React } from "@web3-react/core";
import { Center, Heading } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import Loading from "../../components/loading";
import RequestAccess from "../../components/request-access";

const Roadmap = () => {
  const { active } = useWeb3React();

  if (!active) return <RequestAccess />;

  return (
    <>
      <Center padding={6} color={"#260780"} ><Heading>Vota por la próxima categoría para Ethereal</Heading></Center>
      <p>Hola Mudo</p>
    </>
  );
};

export default Roadmap;