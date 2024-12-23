import { Flex, Spacer, Text } from "@chakra-ui/react";
import Ubicacion from "../../components/enlaces/Ubicacion";
import CarruselFotos from "../../modulos/carrusel/CarruselFotos";
import InfoProductos from "../../modulos/productos/InfoProductos";
import { colors } from "../../configVariables/colors";
import ListaProductos from "../../modulos/productos/ListaProductos";

function Producto() {
  return (
    <>
      {/* ubicacion */}
      <Ubicacion
        justifyContent={"start"}
        ubicacion="productos/categorias/jejeje/jojojo"
      />

      <Flex p="10px">
        {/* carrusel fotos */}
        <CarruselFotos />
        {/* info */}
        <InfoProductos />
      </Flex>

      {/* productos relacionados */}
      <Text fontSize="3xl" as="b" color={colors.teal}> Otros Productos</Text>
      <ListaProductos />
    </>
  );
}
export default Producto;
