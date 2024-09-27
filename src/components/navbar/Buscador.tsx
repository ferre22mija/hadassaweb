import { SearchIcon } from "@chakra-ui/icons"
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { colors } from "../../configVariables/colors"
const primary = colors.teal
function Buscador() {
  return (
    <Box w="30%">
      <InputGroup variant="outline" >
        <Input type='text'
          placeholder='Necesito encontrar...'
           focusBorderColor={primary} 
           borderColor={primary}
           _placeholder={{color:primary}}
           borderRadius="0px"/>
        <InputRightElement>
          <SearchIcon color='green.500' />
        </InputRightElement>
      </InputGroup>
    </Box>

  )
}

export default Buscador