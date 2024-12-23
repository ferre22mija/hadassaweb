import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Ubicacion from "../../components/enlaces/Ubicacion";
import Filtros from "../../modulos/filtros/Filtros";
import FiltroOrden from "../../modulos/filtros/FiltroOrden";
import BloqueFila from "../../modulos/filtros/BloqueFila";
import ListaProductos from "../../modulos/productos/ListaProductos";

function Productos() {
  return (
    <>
      {/* ubicacion */}
      <Ubicacion ubicacion="productos/categorias/jejeje/jojojo" />
      {/* titulo de categorias */}
      <Center my="20px">
        <Text fontSize="3xl" as="b" textTransform="uppercase">
          PRODUCTOS
        </Text>
      </Center>

      {/* categorias relacionadas */}
      <Flex px="20px" w="100%">
        {/* filtros */}
        <Filtros />
        {/* filtro de filtros */}
        <Box w="calc(100vw - 370px)" >
          
          <Stack display="flex" direction="row" justifyContent="flex-end" spacing="20px">
              <FiltroOrden />
              <BloqueFila />
          </Stack>
           {/* productos */}
           <ListaProductos />
        </Box>
      </Flex>
      
      
     
    </>
  );
}
export default Productos;
