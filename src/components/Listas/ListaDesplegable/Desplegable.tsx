import { Box, Center, Flex, Spacer, Text } from "@chakra-ui/react"
import RigthRow from "../../icons/RightRow"
import PersonDiggin from "../../icons/Persondiggin"

function Desplegable() {
  return (
    <Box p="2" w="100%" textColor={"white"} borderBottom="2px">


      <Flex>
        <PersonDiggin boxSize="30px"/>
        <Spacer />
        <Text fontSize='xl'>clavos madera</Text>
        <Spacer />
        <RigthRow boxSize="30px" />
      </Flex>
    </Box>
  )
}
export default Desplegable