import { Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { colors } from "../../configVariables/colors";

interface encabezadoInterface{
    children: ReactElement | string;
}
function Encabezado1({children}:encabezadoInterface) {
    return (
        <Text fontSize="2xl" color={colors.teal} fontWeight="extrabold" >{children}</Text>
      )
}
export default Encabezado1