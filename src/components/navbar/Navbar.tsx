import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import Nav from "./Nav";
import logo from "./../../assets/logo.png";
function Navbar() {
  return (
    <Flex display="flex" alignItems="center" h="100px" bg="teal.400">
      <Image src={logo} boxSize="70px"/>
      <Spacer />
      <Nav>
        <p>Inicio</p>
      </Nav>
      <Nav>
        <p>Productos</p>
      </Nav>
      <Nav>
        <p>Nosotros</p>
      </Nav>
    </Flex>
  );
}
export default Navbar;
