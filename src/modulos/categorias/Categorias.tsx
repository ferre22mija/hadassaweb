import ListaDesplegable from "../../components/Listas/listadesplegable/ListaDesplegable";
import { CATEGORIAS } from "../../data/Categorias";
import { SubcategoriasSelect } from "../../utilities/CategoriasFunction";
import Categoria from "./Categoria";

function Categorias() {
  const categoriasData = SubcategoriasSelect(CATEGORIAS,null);
  return (
    <>
      <ListaDesplegable items={categoriasData} height="calc(100vh - 100px)">
        
        <Categoria />
      </ListaDesplegable>
    </>
  );
}
export default Categorias;
