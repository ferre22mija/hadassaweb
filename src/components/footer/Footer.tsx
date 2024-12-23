import { Box, Divider, Image, Link, Stack, Text } from "@chakra-ui/react";
import { colors } from "../../configVariables/colors";
import logo from "../../assets/logo.png";
import LocationDotIcon from "../icons/LocationDotIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import EnvelopeIcon from "../icons/EnvelopeIcon";
import SquareFacebookIcon from "../icons/SquareFacebookIcon";
function Footer() {
  return (
    <Stack
      w="100%"
      direction={["column", "row"]}
      justifyContent="space-between"
      p="50px"
      bg={colors.orange}
      textColor="white"
    >
      <Box w={["100%", "30%"]}>
        {/* info de la empresa, direccion y telefono y logo */}
        <Image src={logo} w="70%" />
        <Text>
          Somos una empresa dedicada a la venta y distribución de productos de
          ferretería al por mayor y menor
        </Text>
        <Text>
          <LocationDotIcon /> Av. Mariscal Castilla nro 919 - Huanta - Ayacucho
        </Text>
        <Text>
          <WhatsappIcon /> 954 096 238 / 997952724
        </Text>
        <Text>
          <EnvelopeIcon /> ferreterianegociosmijares@gmail.com
        </Text>
      </Box>
      <Box w={["100%", "30%"]}>
        {/* categorias */}
        <Text fontSize="2xl" m="10px">
          CATEGORIAS
        </Text>
        <Divider bg="white" size="3px" />
      </Box>
      <Box w={["100%", "30%"]}>
        {/* horario atencion */}
        <Text fontSize="2xl" m="10px">
          SIGUENOS EN
        </Text>
        <Divider color="white" mb="20px" />
        {/* paginas facebook tiktok e instagram, */}
        <Link href="https://www.facebook.com/profile.php?id=61565932704380" isExternal>
          <SquareFacebookIcon boxSize="30px" />
        </Link>
      </Box>
    </Stack>
  );
}
export default Footer;
