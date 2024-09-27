import { Box, Button, Flex, Icon, Image, Spacer } from "@chakra-ui/react";
import Nav from "./Nav";
import logo from "./../../assets/logo.png";
import Buscador from "./Buscador";
import NavButton from "./NavButton";
import CartShop from "../icons/CartShop";
import { colors } from "../../configVariables/colors";
import NavIcon from "./NavIcon";
function Navbar() {
  return (
    <Flex display="flex" alignItems="center" h="100px">
      <Image src={logo} boxSize="200px" h="100px" mx={2} />
      <Spacer/>
      <Buscador />
      <Nav>Inicio</Nav>
      <Nav>Productos</Nav>
      <Nav>Nosotros</Nav>
      <NavButton/>
      <NavIcon> <CartShop boxSize="30px" color={colors.teal} _hover={{color:colors.orange}}/> </NavIcon>
    </Flex>
  );
}
export default Navbar;
