import { Stack, Button } from "@chakra-ui/react";
import { HiNewspaper } from "react-icons/hi";
import { PiArrowsDownUpDuotone } from "react-icons/pi";
import { TbChartPie2 } from "react-icons/tb";
const NavBar = () => {
  return (
    <>
      <Stack direction={"row"}  alignItems={"center"} justifyContent={"space-around"}
      w={["100vw","24.5vw"]} position={"fixed"} bottom={"0"} py={2} borderTop='1px' borderColor='gray.200'>
      <Button>
        {" "}
        <TbChartPie2 size="30px"/>{" "}
      </Button>

      <Button>
        <HiNewspaper size="30px"/>
      </Button>

      <Button>
        <PiArrowsDownUpDuotone size={"30px"} />
      </Button>
      </Stack>
    </>
  );
};

export default NavBar;
