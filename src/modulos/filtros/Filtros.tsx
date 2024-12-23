import { Box } from "@chakra-ui/react"
import ListaAcordeon from "../../components/Listas/ListaAcordeon/ListaAcordeon"
import FiltroCategoria from "./FiltroCategoria"
import FiltroPrecio from "./FiltroPrecio"
import FiltroCaracteristicas from "./FiltroCaracteristicas"
const FILTROS = [
    {nombre:"Categorias",contenido:<FiltroCategoria />},
    {nombre:"Precio",contenido:<FiltroPrecio />},
    {nombre:"Caracteristicas",contenido:<FiltroCaracteristicas />}

]
function Filtros() {
  return (
    <Box w="300px">
        <ListaAcordeon filtros={FILTROS} />
    </Box>
  )
}
export default Filtros