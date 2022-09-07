import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            © {new Date().getFullYear()} Ethereal dapp es un proyecto de
            <Link ml={1} href="https://twitter.com/sandraupgrade">
              Sandra Carrillo, 
            </Link>
            <Link ml={1} href="https://twitter.com/sandraupgrade">
              Carla Martinez y
            </Link>
            <Link ml={1} href="https://twitter.com/sandraupgrade">
              Vicki Avola
            </Link>
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
