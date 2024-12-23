import { useEffect } from "react";
import Carta from "../../components/carta/Carta";
import ListaGrid from "../../components/Listas/ListaGrid/ListaGrid";
import { PRODUCTOS } from "../../data/Productos";
import ProductoCarta from "./ProductoCarta";
import { Center } from "@chakra-ui/react";
import Titulo from "../../components/texto/Titulo";

function UltimosProductos() {
  const productos = PRODUCTOS;
  return (
    <>
      <Center>
        <Titulo>ULTIMOS PRODUCTOS INGRESADOS</Titulo>
      </Center>

      <ListaGrid items={productos} columnas={5}  >
        <ProductoCarta />
      </ListaGrid>
    </>
  );
}
export default UltimosProductos;
