
import { Box, HStack,Text, Stack,Button } from "@chakra-ui/react"
import { Line } from "react-chartjs-2";
import {MdOutlineArrowBackIosNew} from "react-icons/md";
import {useNavigate,useLocation} from "react-router-dom";
import { StockOptions } from "../../utils/Constants";
const Stock = () => {
  let navigate=useNavigate();
  let location=useLocation();
  return (
    <Box p={8} bg={"white"} h="93%" borderTopRadius={"3xl"}>
<HStack gap={6}>
  <Box borderColor={"red.100"} border={"1px"} borderRadius={"full"} p={1} onClick={()=>navigate("/market")}>
 <MdOutlineArrowBackIosNew size={"30px"}/>
  </Box>
  <Text fontWeight={"bold"} color="black" >{location?.state?.stock?.name} <Text fontWeight={"light"} fontSize="xs" mt={-1}> {location?.state?.stock?.companyName}</Text></Text>
</HStack>
  <Stack mt={12} alignSelf={"start"} direction={"column"}>
    <Text fontWeight={"bolder"} fontSize="3xl">${location?.state?.stock?.price}</Text>
    <Text fontSize={"sm"} color={location?.state?.stock?.color} fontWeight={"bold"}>{location?.state?.stock?.valueChange}%</Text>
  </Stack>
  <Stack mt={16}>
  <Line options={StockOptions} data={location?.state?.data}/>
  </Stack>

  <Stack mt={12} direction={"row"} justifyContent={"space-between"}>
    <Stack direction={"column"}>
      <Text fontSize="md">Close Price</Text>
      <Text fontSize="md">Last Trade Price</Text>
      <Text fontSize="md">Out Standing</Text>
      <Text fontSize="md">Market Value</Text>

    </Stack>
    <Stack direction={"column"}>
      <Text fontWeight={"extrabold"} fontSize="md">$312213</Text>
      <Text fontWeight={"extrabold"} fontSize="md">$3221321332</Text>
      <Text fontWeight={"extrabold"} fontSize="md">$5125125</Text>
      <Text fontWeight={"extrabold"} fontSize="md">$213213321</Text>
    </Stack>
  </Stack>

  <Button backgroundColor='black' color="white" mt={8} mb={4} w="100%">Add to Portfolio</Button>
    </Box>
  )
}

export default Stock