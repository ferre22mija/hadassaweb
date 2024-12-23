import { HamburgerIcon } from "@chakra-ui/icons"
import { Box, Button, Flex } from "@chakra-ui/react"
import ViewComfyAltIcon from "../../components/icons/ViewComfyAltIcon"
import { colors } from "../../configVariables/colors"

function BloqueFila() {
  return (
    <Flex>
        <Button mx="10px" bg={colors.teal} textColor="white"> <ViewComfyAltIcon /> </Button>
        <Button mx="10px" bg={colors.teal} textColor="white"> <HamburgerIcon /> </Button>
    </Flex>
  )
}
export default BloqueFila