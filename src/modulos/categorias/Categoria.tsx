import { Box, Flex, Text } from "@chakra-ui/react";
import IconMap from "../../components/icons/IconMap";
import { colors } from "../../configVariables/colors";
import { useState } from "react";
import SubCategoria from "./SubCategoria";
import { CATEGORIAS } from "../../data/Categorias";
import { SubcategoriasSelect } from "../../utilities/CategoriasFunction";
interface categoriaInteface {
  descripcion?: string;
  icono?: string;
  nivel?: number;
  padre?: number | null;
  id?: number | null;
}
function Categoria({
  descripcion = "sin descripcion",
  icono = "ImageIcon",
  nivel = 1,
  padre = null,
  id = null,
}: categoriaInteface) {
  const FirstIcon = IconMap[icono] || null;
  const RightIcon = IconMap["RigthRow"] || null;
  const subcategorias = SubcategoriasSelect(CATEGORIAS, id);
  const [openCategorias, SetOpenCategorias] = useState(false);
  const [mostrarFlecha, SetMostrarFlecha] = useState(true);
  return (
    <Flex
      align={"center"}
      gap="4"
      justify="space-between"
      p="2"
      textColor={"white"}
      transition="0.2s"
      position="relative"
      _hover={{ bg: "white", textColor: colors.orange }}
      onMouseEnter={() => {
        if (subcategorias.length > 0) {
          SetOpenCategorias(true);
        }
      }}
      onMouseLeave={()=>SetOpenCategorias(false)}
    >
      {FirstIcon ? <FirstIcon boxSize="30px" /> : <p>no hay</p>}
      <Text fontWeight="bold">{descripcion}</Text>
      {subcategorias.length > 0 ? <RightIcon boxSize="30px" /> : <><Box w="30px"></Box></>}
      {openCategorias ? (
        // <Box
        //   bg="blue.200"
        //   width="300px"
        //   height="200px"
        //   position="fixed"
        //   left={`${nivel * 300}px`}
        //   top="100px"
        //   zIndex={nivel}
        // >
        //   {" "}
        //   hola
        // </Box>
        <>
          <SubCategoria subcategorias={subcategorias} nivel={nivel} />
        </>
      ) : (
        <></>
      )}
    </Flex>
  );
}
export default Categoria;
