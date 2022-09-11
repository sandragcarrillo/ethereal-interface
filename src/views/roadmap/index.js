import { useWeb3React } from "@web3-react/core";
// import { Grid } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import Loading from "../../components/loading";
import RequestAccess from "../../components/request-access";

const Roadmap = () => {
  const { active } = useWeb3React();

  if (!active) return <RequestAccess />;

  return (
    <>
      <p>Hola Mudo</p>
    </>
  );
};

export default Roadmap;