import { useWeb3React } from "@web3-react/core";
import { SimpleGrid, Button, Heading, Center, Box, Image, Flex, Spacer, Text} from '@chakra-ui/react'
import { Link } from "react-router-dom";
// import Loading from "../../components/loading";
import RequestAccess from "../../components/request-access";
import {VscStarFull, VscSymbolEvent, VscAccount, VscCode, VscCircuitBoard, VscGraph} from "react-icons/vsc"
//import Roadmap from "../roadmap";

const Gallery = () => {
  const { active } = useWeb3React();

  if (!active) return <RequestAccess />;

  return (
    <>
    <Center padding={6} color={"#260780"} ><Heading>Categorías</Heading></Center>
      <SimpleGrid columns={2} spacing={10}>
      <Button leftIcon={<VscCircuitBoard/>} size="md" height="80px" bg='#260780' color={"white"} border="1px"
      _hover={{bg:"white", color:"#260780", borderColor:"#260780",}}><Link to ="categories">Blockchain</Link></Button>
       <Button leftIcon={<VscCode />} size="md" height="80px" bg='#260780' color={"white"} fontSize={"lg"}  border="1px"
      _hover={{bg:"white", color:"#260780", borderColor:"#260780",}}><Link to ="categories">Tecnología</Link></Button>
       <Button leftIcon={<VscSymbolEvent />} size="md" height="80px" bg='#260780' color={"white"} fontSize={"lg"}  border="1px"
      _hover={{bg:"white", color:"#260780", borderColor:"#260780",}}><Link to="./categories" width="100%">Startups</Link></Button>
       <Button leftIcon={<VscAccount />}  size="md" height="80px" bg='#260780' color={"white"} fontSize={"lg"}  border="1px"
      _hover={{bg:"white", color:"#260780", borderColor:"#260780",}}><Link to="categories">Crecimiento personal</Link></Button>
       <Button leftIcon={<VscGraph/>}  size="md" height="80px" bg='#260780' color={"white"} fontSize={"lg"}  border="1px"
      _hover={{bg:"white", color:"#260780", borderColor:"#260780",}}><Link to="categories">Marketing</Link></Button>
           <Button leftIcon={<VscStarFull />} size="md" height="80px" bg='#260780' color={"white"} fontSize={"lg"}  border="1px"
      _hover={{bg:"white", color:"#260780", borderColor:"#260780", }}><Link to="categories">Product Management</Link></Button>
    </SimpleGrid>

 
    <Flex  alignItems='center' gap='2' paddingTop={"40px"}>
    <Box>
        <Image src={"https://raw.githubusercontent.com/vickiavola/proyecto-ethereum/40ac47c294dc0ae97f5fdb0d0524f28eeed2cf41/assets/imgs/cellular.svg"}/>
        </Box>
        <Box>
            <Heading color={"#260780"}>¡Vota por las proximas categorías!</Heading>
            <Spacer/>
            <Text marginTop={"20px"}>Puedes ampliar la lista de los audiolibros disponibles con el mismo NFT que adquiriste, el cual te permite decidir el roadmap de la plataforma</Text>
            <Button bg='#260780' color={"white"} marginTop="20px"  border="1px"
            _hover={{bg:"white", color:"#260780", borderColor:"#260780"}}><Link to="/roadmap">Vota aquí</Link></Button>
        </Box>
        
    </Flex>
    </>
   
  );
};

export default Gallery;