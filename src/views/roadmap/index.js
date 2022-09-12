import React from "react";
import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
  StatArrow,
  Box,
} from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { VscHubot, VscBriefcase } from "react-icons/vsc";
import useProposalStatus from "../../hooks/useProposalStatus";


const Roadmap = () => {
  const { active } = useWeb3React();
  const {
    positiveVotes,
    negativesVotes,
    voting,
    handleVote,
    isVoted,
    percentLiderazgo,
    percentUserExperience,
  } = useProposalStatus();

  return (
    <>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              color="#260780"
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
              }}
            >
            ¡Vota por la próxima categoría!
            </Text>
          </Heading>
          <Text>
              Ethereal sigue creciendo y tú tienes el poder para decidir los nuevos audiocursos y audiolibros que se agregaran
          </Text>
         

        </Stack>
        <Flex
          flex={1}
          direction="column"
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          {active ? (
            <>
              <StatGroup width={"100%"}>
                <Stat>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems="center"
                  >
                    <StatLabel>Vota por User Experience</StatLabel>
                    <StatNumber>{positiveVotes}</StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      {`${percentUserExperience}%`}
                    </StatHelpText>
                    <Stack direction="row" spacing={4}>
                      <Button
                        leftIcon={<VscHubot />}
                        colorScheme="blue"
                        variant="solid"
                        isLoading={voting}
                        isDisabled={isVoted}
                        onClick={() => handleVote(2)}
                        size="lg"
                      >
                        User Experience
                      </Button>
                    </Stack>
                  </Box>
                </Stat>

                <Stat>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems="center"
                  >
                    <StatLabel>Vota por Liderazgo</StatLabel>
                    <StatNumber>{negativesVotes}</StatNumber>
                    <StatHelpText>
                      <StatArrow type="decrease" />
                      {`${percentLiderazgo}%`}
                    </StatHelpText>
                    <Stack direction="row" spacing={4}>
                      <Button
                        leftIcon={<VscBriefcase />}
                        colorScheme="blue"
                        variant="outline"
                        isLoading={voting}
                        isDisabled={isVoted}
                        onClick={() => handleVote(1)}
                        size="lg"
                      >
                        Liderazgo
                      </Button>
                    </Stack>
                  </Box>
                </Stat>
              </StatGroup>
              {isVoted ? (
                <Badge mt={2} colorScheme={"yellow"}>
                  Has votado por la próxima categoría
                </Badge>
              ) : (
                ""
              )}
            </>
          ) : (
            <Badge mt={2}>Wallet desconectado</Badge>
          )}
        </Flex>
      </Stack>
    </>
  );
};

export default Roadmap;