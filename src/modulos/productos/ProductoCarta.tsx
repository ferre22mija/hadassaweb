import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { colors } from "../../configVariables/colors";
import CartShop from "../../components/icons/CartShop";
import HeartIcon from "../../components/icons/HeartIcon";
import { lighten } from "polished";
import { Link } from "react-router-dom";
interface productoCartaInterface {
  imagen?: string;
  descripcion?: string;
  precioVenta?: number;
}

function ProductoCarta({
  imagen,
  descripcion,
  precioVenta,
}: productoCartaInterface) {
  return (
    <Card
      border="1px solid"
      borderColor={colors.teal}
      w="250px"
      h="300px"
      role="group"
      overflow="hidden"
    >
      <CardBody p="0px">
        <Image src={imagen} w="200px" height="200px" />
        <Box
          w="100%"
          transition="all 0.8s"
          _groupHover={{
            transform: "translateY(-60px)",
            bg: "gray.100",
          }}
        >
          <Text
            textTransform="uppercase"
            noOfLines={1}
            flex="2"
            minHeight="50px"
          >
            <Center>{descripcion}</Center>
          </Text>
          <Center>
            <Box
              bg={colors.orange}
              textColor="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="100px"
            >
              <Text fontSize="lg" fontWeight="extrabold">
                {precioVenta?.toFixed(2)}
              </Text>
            </Box>
          </Center>
          <Flex pt={4}>
            <Button
              m={4}
              bg={colors.teal}
              _hover={{ bg: lighten(0.1, colors.teal) }}
              textColor="white"
            >
              <Link to="/producto"> Info</Link>
            </Button>
            <Button
              m={4}
              bg={colors.orange}
              _hover={{ bg: lighten(0.1, colors.orange) }}
              textColor="white"
            >
              <CartShop />
            </Button>
            <Button
              m={4}
              bg={colors.pink}
              _hover={{ bg: lighten(0.1, colors.pink) }}
              textColor="white"
            >
              <HeartIcon />
            </Button>
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
}
export default ProductoCarta;
