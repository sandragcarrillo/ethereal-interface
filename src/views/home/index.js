import{Stack,Flex,Heading,Text,Button,Image,Badge,useToast, Box,Link }from "@chakra-ui/react";
//import{Link}from "react-router-dom";
import{useWeb3React}from "@web3-react/core";
import{useCallback,useEffect,useState}from "react";
import useNFTs from "../../hooks/useNFTs";
import { FaLinkedin, FaGithub } from "react-icons/fa";



const Home=()=>{
  const [imageSrc,setImageSrc] = useState("");
  const {active,account} = useWeb3React();
  const CrazyNFTs = useNFTs();
  const [isMinting, setIsMinting] = useState(false)
  const toast = useToast(); 
  const getNFTsData = useCallback (async()=> 
 {if(CrazyNFTs) {const totalSupply=await CrazyNFTs.methods.totalSupply().call();const dnaPreview=await CrazyNFTs.methods.deterministicPseudoRandomDNA(totalSupply,account).call();const image=await CrazyNFTs.methods.imageByDNA(dnaPreview).call();setImageSrc(image);}},[CrazyNFTs,account]);
  useEffect(()=>{getNFTsData();},[getNFTsData]);
  
  const mint = () => {
    setIsMinting(true);

    CrazyNFTs.methods.mint().send({
      from: account,
    })
    .on("transactionHash", (txHash) =>{
      toast({
        title: 'Transacción enviada',
        description: txHash,
        status: 'info'
      })
    })
    .on("recepit", () =>{
      setIsMinting(false);
      toast({
        title: 'Transacción confirmada',
        description: 'Felicidades',
        status: 'success'
      })

    })
    .on("error", (error) =>{
      setIsMinting(false);
      toast({
        title: 'Transacción fallida',
        description: error.message,
        status: 'error'
      })
    })
  }
  
  return(
  
  <Box>
        <Flex
  align={"center"}
  spacing={{base:8,md:10}}
  py={{base:20,md:28}}
  direction={{base:"column-reverse",md:"row"}}><Stack flex={1}spacing={{base:5,md:10}}><Heading
  lineHeight={1.1}
  fontWeight={600}
  fontSize={{base:"3xl",sm:"4xl",lg:"6xl"}}><Text color={"#260780"}
  as={"span"}
  position={"relative"}
  _after={{content:"''",width:"full",height:"30%",position:"absolute",bottom:1,left:0,zIndex:-1,}}>Conocimiento accesible en web3 </Text><br/><Text as={"span"}color={"green.400"}></Text></Heading><Text color={"black.500"}> En Ethereal podrás expandir tus conocimientos con audiolibros y audiocursos, mintea un Crazy NFT y sé parte de una comunidad de conocimiento descentralizado </Text><Text color={"#260780"}>Cada Crazy NFT se genera de forma secuencial basado en tu address, usa el previsualizador para averiguar cuál sería tu NFT si 
  minteas en este momento</Text>
  
  <Stack
  spacing={{base:4,sm:6}}
  direction={{base:"column",sm:"row"}}>
    
  <Button
    rounded={"full"}
    size={"lg"}
    fontWeight={"normal"}
    px={6}
    colorScheme={"green"}
    bg={"#260780"}
    _hover={{bg:"#004AAD"}}
    disabled={!CrazyNFTs}
    isLoading={isMinting}
    onClick={mint}>
    Obtén tu NFT
  </Button>

  <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <a
              href="https://github.com/sandragcarrillo/ethereal-interface"
            >
              <Button
                leftIcon={<FaGithub/>}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                borderColor="#004AAD"
                color={"#004AAD"}
                variant="outline"
                rounded="full"
              >
                Repositorio del proyecto
              </Button>
            </a>
          </Stack>
      
 </Stack>
  </Stack>
  <Flex
  flex={1}
  direction="column"
  justify={"center"}
  align={"center"}
  position={"relative"}
  w={"full"}><Image src={active?imageSrc:"https://raw.githubusercontent.com/vickiavola/proyecto-ethereum/1544b3f1bf5388b2282adc2a43069dd0153ebfb2/assets/imgs/libro_audifonos_1.svg"}/>{active?(<><Flex mt={2}><Badge>Next ID:<Badge ml={1}color="#004AAD">1</Badge></Badge><Badge ml={2}>Address:<Badge ml={1}color="#004AAD">0x0000...0000</Badge></Badge></Flex><Button
  onClick={getNFTsData}
  mt={4}
  size="xs"
  bg="#260780"
  color="#FFFF">Actualizar</Button></>):(<Badge mt={2}>Wallet desconectado</Badge>)}</Flex>

  </Flex>

  <Box bg={"#260780"}  
        width={"100%" }borderRadius={"10"}>
    <Flex direction={{base:"column",md:"row"}} spacing={{base:5,md:10}} justify={"center"}
  align={"center"} >
    <Box margin={"25px"}>
        <Heading color={"white"} fontSize="5xl">
        ¿Cómo funciona?
        </Heading>
        <Box color={"white"} margin={"5px"} fontSize="lg">
          Al mintear tu NFT, podrás ingresar a la galería de conocimiento en audio, además tendrás el poder de decidir las categorías que serán añadidas 
        </Box>
    </Box>
    <Image src="https://raw.githubusercontent.com/vickiavola/proyecto-ethereum/40ac47c294dc0ae97f5fdb0d0524f28eeed2cf41/assets/imgs/cellular.svg" width={"400px"}>

        </Image>
      </Flex>
  </Box>
   
  <Box 
        width={"100%" }borderRadius={"10"} marginTop="20px" border={"1px"} borderColor="#260780">
    <Flex direction={{base:"column",md:"row"}} spacing={{base:5,md:10}} justify={"center"}
  align={"center"} >
     <Image src="https://www.creativefabrica.com/wp-content/uploads/2021/12/03/Education-NFT-Audio-Course-Icon-Graphics-21155552-2-580x387.png" width={"500px"} borderRadius="10px">

</Image>
    <Box margin={"25px"}>
        <Heading color={"#260780"} fontSize="5xl">
        Nuestro objetivo
        </Heading>
        <Box color={"#260780"} margin={"5px"} fontSize="lg">
         Ampliar el acceso al conocimiento descentralizado e incensurable gracias a la tecnología Blockchain. Siendo la comunidad quienes protagonizan la toma de decisión de la plataforma
        </Box>
    </Box>
   
      </Flex>
  </Box>


<Box bg={"white"}  
      width={"100%" }borderRadius={"10"} padding="10px">
        <Heading color={"#260780"} m="40px" align="center">
      Equipo
      </Heading>
  <Flex direction={{base:"column",md:"row"}} spacing={{base:5,md:10}} justify={"center"}
align={"center"} >
  <Box margin={"25px"}>
      
      <Box color={"#260780"} margin={"5px"} align="center">
      <Image
      borderRadius='md'
      boxSize='200px'
      src='https://pbs.twimg.com/profile_images/1462822525231054856/ByM9Sxn6_400x400.jpg'
      alt='Sandra Carrillo'
      />
        <Text fontWeight="bold" margin={"2px"}>Sandra Carrillo</Text>
        <Text>
          Frontend developer, Jr Solidity Developer, Especialista en creación de contenido E-Learning para conectar talentos con oportunidades
        </Text>
        <Flex justify={"center"}
  align={"center"} gap={6} marginTop="10px"> <Link href="https://github.com/sandragcarrillo" ><FaGithub w={5} h={6}></FaGithub> </Link>
        <Link href="https://www.linkedin.com/in/sandra-carrillo" ><FaLinkedin w={5} h={6}></FaLinkedin></Link></Flex>
      </Box>
  </Box>
      <Box color={"#260780"} margin={"5px"} align="center" >
      <Image
      borderRadius='md'
      boxSize='200px'
      src='https://pbs.twimg.com/profile_images/1490399448832299025/xuFkuXHi_400x400.jpg'
      alt='Carla Martínez'
      />
        <Text fontWeight="bold" margin={"2px"}>Carla Martínez</Text>
        <Text>
        Frontend developer, Jr Solidity Developer, Especialista en creación de contenido E-Learning para conectar talentos con oportunidades
        </Text>
        <Flex justify={"center"}
  align={"center"} gap={6} marginTop="10px"> <Link href="https://github.com/carlaupgrade" ><FaGithub w={5} h={6}></FaGithub> </Link>
        <Link href="https://www.linkedin.com/in/carlamar/" ><FaLinkedin w={5} h={6}></FaLinkedin></Link></Flex>
      </Box>
      <Box color={"#260780"} margin={"5px"} align="center">
      <Image
      borderRadius='md'
      boxSize='200px'
      src='https://pbs.twimg.com/profile_images/1540522912750379008/v6OojeTY_400x400.jpg'
      alt='Vicki Avola'
      />
        <Text fontWeight="bold" margin={"2px"}>Vicki Avola</Text>
        <Text>
        Ingeniera Electricista, estudiante de desarrollo de web2.0 y web3.0. Apasionada por la tecnología y la vida conectada
        </Text>
        <Flex justify={"center"}
  align={"center"} gap={6} marginTop="10px"> <Link href="https://github.com/vickiavola" ><FaGithub w={5} h={6}></FaGithub> </Link>
        <Link href="https://www.linkedin.com/in/vicki-esther-avola-40475127/" ><FaLinkedin w={5} h={6}></FaLinkedin></Link></Flex>
      </Box>

    </Flex>
</Box>
 
   

</Box>





 
   



  

  );};





export default Home;