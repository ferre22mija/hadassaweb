import { Box, Button, Center, Text } from "@chakra-ui/react";
import { colors } from "../../configVariables/colors";
import VariantesMuestra from "../variantes/VariantesMuestra";

function InfoProductos() {
  return (
    <Box p="3" maxW="700px">
      {/* titulo */}
      <Text as="b" fontSize="3xl" mb="20px">
        Nombre del productos en mayuscula y largo que se pueda mantener en
        sombreado y de un mismo tamaño
      </Text>
      <br />
      {/* precio */}
      <Text as="b" fontSize="3xl" color={colors.teal} mb="20px">
        {" "}
        S/. 2550.50
      </Text>
      {/* descripcion */}
      <Text>
        ddescripcion del producto largo opequeño que se mantenga así por que se
        demuestra que está completamente completo de descripcion y en las fotos
        se puede ver el producto la huea fome po heon pololo con la cevicheria
        la concha de su mar holy holy church
      </Text>
      <br/>
      {/* variantes */}
      <VariantesMuestra />
      {/* stock de productos sin variantes */}
      <Text as="b" fontSize="xl" color={colors.orange}>
        {" "}
        100 unidades en stock
      </Text>
      {/* caracteristicas */}

      {/* whatsapp */}
      <Center>
        <Button colorScheme="green" borderRadius="0px">Whatsapp</Button>
      </Center>
    </Box>
  );
}
export default InfoProductos;
