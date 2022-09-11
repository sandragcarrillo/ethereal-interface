import{Stack,Flex,Heading,Text,Button,Image,Badge,useToast, Box}from "@chakra-ui/react";
//import{Link}from "react-router-dom";
import{useWeb3React}from "@web3-react/core";
import{useCallback,useEffect,useState}from "react";
import useNFTs from "../../hooks/useNFTs";


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

  <Box bg={"#260780"}  mx="auto" minW={"100vh"}
        width="100%">
    <Flex>
    <Box>
        <Heading>
        ¿Cómo funciona?
        </Heading>
    </Box>
    <Image src="https://raw.githubusercontent.com/vickiavola/proyecto-ethereum/40ac47c294dc0ae97f5fdb0d0524f28eeed2cf41/assets/imgs/cellular.svg">

        </Image>
      </Flex>
  </Box>
   
     

  </Box>





  

  );};





export default Home;