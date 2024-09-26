import { SearchIcon } from "@chakra-ui/icons"
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react"

function Buscador() {
  return (
    <Box w="30%">
      <InputGroup variant="outline" >
        <Input type='text' placeholder='Necesito encontrar...' />
        <InputRightElement>
          <SearchIcon color='green.500' />
        </InputRightElement>
      </InputGroup>
    </Box>

  )
}

export default Buscador