import { Flex, Text, VStack } from "@chakra-ui/react"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { Stock } from "../../utils/Interface";
import { options } from "../../utils/Constants";
import {useNavigate} from "react-router-dom";


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

const Tab = ({stock}:{stock:Stock}) => {

    let navigate=useNavigate();
   
      
      const labels = ['March', 'April', 'May', 'June', 'July'];
    
       const data = {
        labels,
        datasets: [
          {
            data: stock?.data,
            borderColor: stock?.color,
            backgroundColor:stock?.color,
            label:false
          }
        ],
      };
  return (
    <Flex bg={"white"} p={4} borderBottom={"2px"} borderColor={"gray.200"} direction={"row"} justifyContent={"space-around"} w="full" align="center" cursor={"pointer"} onClick={()=>navigate("/stock",{
        state:{
            options,
            data,
            stock
        }
    })}>
            <VStack gap={1}>
<Text fontWeight={"bold"} color="black" >{stock?.name} <Text fontWeight={"light"} fontSize="xs" mt={-1}> {stock?.companyName}</Text></Text>

            </VStack>

            <VStack width={"100px"}>
            <Line options={options} data={data}/>
            </VStack>
            <Text fontWeight={"bold"} color="black" >${stock?.price} <Text fontSize="xs" mt={-1} color={stock?.color}>{stock?.valueChange}%</Text></Text>
            <VStack>
                </VStack>
    </Flex>
  )
}

export default Tab




