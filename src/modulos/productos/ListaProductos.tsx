import ListaGrid from "../../components/Listas/ListaGrid/ListaGrid"
import { PRODUCTOS } from "../../data/Productos";
import ProductoCarta from "./ProductoCarta"

function ListaProductos() {
    const productos = PRODUCTOS;
  return (
    <ListaGrid items={productos} columnas={5}  >
        <ProductoCarta />
      </ListaGrid>
  )
}
export default ListaProductos