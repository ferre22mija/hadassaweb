import { Button } from "@chakra-ui/react"
import { colors } from "../../configVariables/colors"
const border = "1px " + colors.teal
function NavButton() {
    return (
        <Button bg="white" 
        textColor={colors.teal}
        _hover={{ bg: colors.teal, textColor:"white" }} 
        borderRadius="0px" border="1px" 
        borderColor={colors.teal} >Ingresar</Button>
    )
}
export default NavButton