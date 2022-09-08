import { Link as DefaultLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const NavLink = ({ children, ...props }) => (
  <DefaultLink
    px={2}
    py={1}
    as={Link}
    rounded={"md"}
    color="white"
    _hover={{
      textDecoration: "none",
      bg:"white",
      color:"#260780"
    }}
    {...props}
  >
    {children}
  </DefaultLink>
);

export default NavLink;
