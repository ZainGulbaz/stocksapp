import { useEffect,useState } from "react";
import {
  Box,
  Button,
  Stack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import Tab from "./Tab";
import { getStocksData } from "./Api";
import { Stock } from "../../utils/Interface";
import Loader from "../../components/loader/loader";

const Market = () => {
  const marketThemeColor = "#1877f2";
  const [stocks,setStocks]=useState<Stock[]|[]>([]);
  const [isLoader,setIsLoader]=useState(true);
  const[searchText,setSearchText]=useState("");

  useEffect(()=>{
 getStocksData().then(res=>{setStocks(res);
setIsLoader(false);}).catch(err=>{
  alert("error in fetching stocks");
  setIsLoader(false);
  console.log(err);
 })
  },[]);

  const handleSearch=(event: React.ChangeEvent<HTMLInputElement>)=>setSearchText(event.target.value);
  
  return ( 
    <Box overflow={"hidden"}>
      <Box
        className="HeaderBox"
        bg={marketThemeColor}
        py={4}
        px={2}
        borderTopRadius={"3xl"}
        gap={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          w="full"
          p={2}
        >
          <Text></Text>
          <Button bg={marketThemeColor}>
            <IoMdNotificationsOutline size="30px" />
          </Button>
        </Stack>
        <Box px={8}>
          <Text fontWeight={"bolder"} fontSize={"3xl"} color={"white"}>
            Markets
          </Text>
          <InputGroup mt={8}>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch size="20px" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search Markets"
              bg={"blue.400"}
              borderColor={marketThemeColor}
              onChange={handleSearch}
            />
          </InputGroup>

          <Stack direction="row" mt={4} color="gray.300" gap={4} align={"flex-start"} style={{overflow:"auto",whiteSpace:"nowrap"}} className="ScrollBar">
            <Text cursor={"pointer"} color={"white"}>Main Market </Text>
            <Text cursor={"pointer"}>Junior Market</Text>
            <Text cursor={"pointer"}>Funds</Text>
            <Text cursor={"pointer"}>FX Rates</Text>
            <Text cursor={"pointer"}>Seconday Market</Text>
        </Stack>
        </Box>    
      </Box>
      <Box justifyContent={"center"} alignItems={"center"} style={{overflowY:"auto",whiteSpace:"nowrap"}}>
          {(isLoader)?<Loader/>:stocks?.filter(stock=>stock?.name?.startsWith(searchText))?.map(stock=><Tab stock={stock}/>)}  
      </Box>
      
    </Box>
  );
};

export default Market;
