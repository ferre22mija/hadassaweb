import ListaDesplegable from "../../components/Listas/listadesplegable/ListaDesplegable";
import Categoria from "./Categoria";

interface SubcategoriasInterface {
  subcategorias: Array<any>;
  nivel:number
}
function SubCategoria({ subcategorias,nivel }: SubcategoriasInterface) {
  const subCategorias = subcategorias;
  return (
    <ListaDesplegable
      items={subCategorias}
      // left={`${nivel * 300}px`}
      left="300px"
      position="absolute"
      top="0px"
      zIndex={nivel}
    >
      <Categoria />
    </ListaDesplegable>
  );
}
export default SubCategoria;
