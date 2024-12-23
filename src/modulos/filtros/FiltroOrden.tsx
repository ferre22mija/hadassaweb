import { Box, Select } from "@chakra-ui/react"

function FiltroOrden() {
  return (
    <Select w="40%">
        <option>ordenar de a - z</option>
        <option>ordenar de z - a</option>
        <option>ordenar de menor a mayor precio</option>
        <option>ordenar de mayor a menor precio</option>
    </Select>
  )
}
export default FiltroOrden