import { Box, Button, Flex, Icon, Image, Spacer } from "@chakra-ui/react";
import Nav from "./Nav";
import logo from "./../../assets/logo.png";
import Buscador from "./Buscador";
import NavButton from "./NavButton";
import CartShop from "../icons/CartShop";
import { colors } from "../../configVariables/colors";
import NavIcon from "./NavIcon";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <Flex display="flex" alignItems="center" h="100px">
      <Image src={logo} boxSize="200px" h="100px" mx={2} />
      <Spacer/>
      <Buscador />
      <Nav> <Link to="" >Inicio</Link></Nav>
      <Nav> <Link to="productos">Productos</Link> </Nav>
      <Nav> <Link to="nosotros">Nosotros</Link> </Nav>
      <NavButton/>
      <NavIcon> <CartShop boxSize="30px" color={colors.teal} _hover={{color:colors.orange}}/> </NavIcon>
    </Flex>
  );
}
export default Navbar;
