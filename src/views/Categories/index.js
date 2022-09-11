import { useWeb3React } from "@web3-react/core";
import { Flex, Heading, Image, Text, Box, Spacer, } from '@chakra-ui/react'
//import { Link } from "react-router-dom";
// import Loading from "../../components/loading";
import RequestAccess from "../../components/request-access";
//import Roadmap from "../roadmap";

const Categories = () => {
  const { active } = useWeb3React();

  if (!active) return <RequestAccess />;

  return (
    <>
    <Heading align={"center"} padding="10px">Audiocursos y audiolibros en esta categoría</Heading>

    <Flex w='100%' h='150px' bg='#260780' borderRadius={"10px"} marginTop="20px"  >
         <Image src="https://github.com/vickiavola/proyecto-ethereum/blob/master/assets/imgs/snow_crash.png?raw=true" width={"100px"} borderTopLeftRadius="10" borderBottomLeftRadius={"10"} objectFit="cover"></Image>
         <Box margin={"20px"}>
         <Text  color="white" fontSize={"small"}>Audiolibro</Text>
         <Text  color="white" fontWeight={"bold"} fontSize="2xl">Snow Crash</Text>
         <Text marginTop={"5px"} left={"10px"} color="white" >Autor: Neal Stephenson</Text>
          </Box>
          <Spacer />
          <Image src="https://raw.githubusercontent.com/vickiavola/proyecto-ethereum/40ac47c294dc0ae97f5fdb0d0524f28eeed2cf41/assets/imgs/play_bottom.svg" w={"50px"} marginRight="40px"></Image> 
     </Flex>

     <Flex w='100%' h='150px' bg='#260780' borderRadius={"10px"} marginTop="20px"  >
         <Image src="https://github.com/vickiavola/proyecto-ethereum/blob/master/assets/imgs/blockchain_basic.png?raw=true" width={"100px"} borderTopLeftRadius="10" borderBottomLeftRadius={"10"}></Image>
         <Box margin={"20px"}>
         <Text  color="white" fontSize={"small"}>Audiolibro</Text>
         <Text  color="white" fontWeight={"bold"} fontSize="2xl">Blockchain básico</Text>
         <Text marginTop={"5px"} left={"10px"} color="white" >Autor: Daniel Drescher</Text>
          </Box>
          <Spacer />
          <Image src="https://raw.githubusercontent.com/vickiavola/proyecto-ethereum/40ac47c294dc0ae97f5fdb0d0524f28eeed2cf41/assets/imgs/play_bottom.svg" w={"50px"} marginRight="40px"></Image> 
     </Flex>

     <Flex w='100%' h='150px' bg='#260780' borderRadius={"10px"} marginTop="20px"  >
         <Image src="https://www.ciat.org/wp-content/uploads/2021/07/BLOCKCHAIN-PARA-MEJORAR-LA-RECAUDACI%C3%93N-DEL-IVA_Parte_1.png" width={"100px"} borderTopLeftRadius="10" borderBottomLeftRadius={"10"} objectFit="cover"></Image>
         <Box margin={"20px"}>
         <Text  color="white" fontSize={"small"}>Audiocurso</Text>
         <Text  color="white" fontWeight={"bold"} fontSize="2xl">Blockchain para principiantes</Text>
         <Text marginTop={"5px"} left={"10px"} color="white" >Autor: Carla Martinez</Text>
          </Box>
          <Spacer />
          <Image src="https://raw.githubusercontent.com/vickiavola/proyecto-ethereum/40ac47c294dc0ae97f5fdb0d0524f28eeed2cf41/assets/imgs/play_bottom.svg" w={"50px"} marginRight="40px"></Image> 
     </Flex>


     <Flex w='100%' h='150px' bg='#260780' borderRadius={"10px"} marginTop="20px"  >
         <Image src="https://github.com/vickiavola/proyecto-ethereum/blob/master/assets/imgs/the-web.png?raw=true" width={"100px"} borderTopLeftRadius="10" borderBottomLeftRadius={"10"}></Image>
         <Box margin={"20px"}>
         <Text  color="white" fontSize={"small"}>Audiolibro</Text>
         <Text  color="white" fontWeight={"bold"} fontSize="2xl">Tejiendo la red</Text>
         <Text marginTop={"5px"} left={"10px"} color="white" >Autor: Tim Berners-Lee</Text>
          </Box>
          <Spacer />
          <Image src="https://raw.githubusercontent.com/vickiavola/proyecto-ethereum/40ac47c294dc0ae97f5fdb0d0524f28eeed2cf41/assets/imgs/play_bottom.svg" w={"50px"} marginRight="40px"></Image> 
     </Flex>

    </>
   
  );
};

export default Categories;