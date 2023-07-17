import { Box } from '@chakra-ui/react'
import NavBar from './components/navigation'
import Market from './views/Market'
import Stock from "./views/Stock";
import {Route,Routes,Navigate} from "react-router-dom";
import './App.css'
import { ROUTES } from './utils/Constants';

function App() {

  return (
    <>

    <Box w={["full","25vw"]} h={"100vh"} bg={"gray.100"} border={"1"} borderRadius={"xl"} p={2}>
    <Routes>
   <Route path={ROUTES.home} element={<Navigate to={ROUTES.market}/>}/>   
  <Route element={<Market/>} path={ROUTES.market} />
  <Route element={<Stock/>} path={ROUTES.stock}/> 
  </Routes>
  <NavBar/>
    </Box>
      
    </>
  )
}

export default App
