import { Center, Image, Text, VStack } from "@chakra-ui/react";

// la variante base con la info necesaria
interface interfaceVariante {
  variante: any;
}
function Variante({variante,...props}:interfaceVariante) {
  return (
    <VStack
      w="80px"
      boxShadow="lg"
      _hover={{ transform: "scale(1.1)" }}
      cursor="pointer"
    >
      <Center>
        <Image boxSize="80px" src={variante.imagen} />
      </Center>
      <Text fontSize="xs">nombre</Text>
      <Text fontSize="xs">
        <b>Stock:</b>{variante.stock}
      </Text>
    </VStack>
  );
}
export default Variante;
