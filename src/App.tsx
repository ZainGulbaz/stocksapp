import { Box } from '@chakra-ui/react'
import NavBar from './components/navigation'
import Market from './views/Market'
import Stock from "./views/Stock";
import {Route,Routes} from "react-router-dom";
import './App.css'

function App() {

  return (
    <>

    <Box w={["full","25vw"]} h={"100vh"} bg={"gray.100"} border={"1"} borderRadius={"xl"} p={2}>
    <Routes>
  <Route element={<Market/>} path="market" />
  <Route element={<Stock/>} path="stock"/> 
</Routes>
<NavBar/>

    </Box>
      
    </>
  )
}

export default App
