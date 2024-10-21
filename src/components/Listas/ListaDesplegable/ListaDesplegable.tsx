import { Box } from "@chakra-ui/react"
import { colors } from "../../../configVariables/colors"
import Desplegable from "./Desplegable"
import DesplegableFoto from "./DesplegableFoto"

function ListaDesplegable({datos,children}:{datos:Arra,children: JSX.Element}) {
  return (
    <Box bg={colors.orange} w="22%" maxHeight={`calc(100vh - 100px)`} >
      <Desplegable />
      <Desplegable />
      <DesplegableFoto />
    </Box>
  )
}
export default ListaDesplegable