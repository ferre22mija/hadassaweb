import { Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { colors } from "../../configVariables/colors";

interface tituloInterface{
    children: ReactElement | string;
}
function Titulo({children}:tituloInterface) {
  return (
    <Text fontSize="4xl" color={colors.teal} fontWeight="extrabold" >{children}</Text>
  )
}
export default Titulo