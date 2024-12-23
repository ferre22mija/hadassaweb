import { Search2Icon } from "@chakra-ui/icons"
import { Button, Flex, Input, Text } from "@chakra-ui/react"

function FiltroPrecio() {
  return (
    <Flex>
        <Input placeholder="min." />
        <Text as="b" mx="10px"> _ </Text>
        <Input placeholder="max." />
        <Button ml="10px"> <Search2Icon /> </Button>
    </Flex>
  )
}
export default FiltroPrecio