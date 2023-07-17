
import { Box, HStack,Text, Stack } from "@chakra-ui/react"
import {MdOutlineArrowBackIosNew} from "react-icons/md";
const Stock = () => {
  return (
    <Box p={8} bg={"white"} h="93%" borderTopRadius={"3xl"}>
<HStack gap={6}>
  <Box borderColor={"red.100"} border={"1px"} borderRadius={"full"} p={1}>
 <MdOutlineArrowBackIosNew size={"30px"}/>
  </Box>
  <Text fontWeight={"bold"} color="black" >DIJA <Text fontWeight={"light"} fontSize="xs" mt={-1}> Dija industries</Text></Text>
</HStack>
  <Stack mt={12} alignSelf={"start"} direction={"column"}>
    <Text fontWeight={"bolder"} fontSize="3xl">$234832</Text>
    <Text fontSize={"sm"} color={"green.600"} fontWeight={"bold"}>+2.34%</Text>
  </Stack>
    </Box>
  )
}

export default Stock