import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Nav from "./Nav";
import logo from "./../../assets/logo.png";
import Buscador from "./Buscador";
function Navbar() {
  return (
    <Flex display="flex" alignItems="center" h="100px">
      <Image src={logo} boxSize="200px" h="100px" mx={2}/>
      <Buscador/>
      
    </Flex>
  );
}
export default Navbar;
