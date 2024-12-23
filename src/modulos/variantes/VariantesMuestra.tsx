// lo que se ve primero al abrir un producto y no en

import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { colors } from "../../configVariables/colors";
import Variantes from "./Variantes";
import { useState } from "react";
import Variante from "./Variante";

// el drawer
function VariantesMuestra() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [varianteSeleccionada, SetVarianteSeleccionada] = useState({});
  const variantes = [
    {
      nombre: "marron",
      imagen: "https://placehold.co/100x100/8D390B/FFF",
      stock: 40,
    },
    {
      nombre: "rojo",
      imagen: "https://placehold.co/100x100/FF0000/FFF",
      stock: 10,
    },
    {
      nombre: "verde",
      imagen: "https://placehold.co/100x100/15C805/FFF",
      stock: 2,
    },
    {
      nombre: "azul",
      imagen: "https://placehold.co/100x100/000000/FFF",
      stock: 3,
    },
    {
      nombre: "amarillo",
      imagen: "https://placehold.co/100x100/000000/FFF",
      stock: 3,
    },
    {
      nombre: "melon",
      imagen: "https://placehold.co/100x100/000000/FFF",
      stock: 3,
    },
    {
      nombre: "turqueza",
      imagen: "https://placehold.co/100x100/000000/FFF",
      stock: 3,
    },
  ];
  const variantesVisibles = variantes.slice(0, 5);
  return (
    <>
      <Flex displa >
        <Wrap spacing="20px" mb="10px">
          {variantesVisibles.map((variante, index) => {
            return (
              <WrapItem
                key={index}
                onClick={() => {
                  onOpen();
                  SetVarianteSeleccionada(variante);
                }}
              >
                <Variante variante={variante} />
              </WrapItem>
            );
          })}
        </Wrap>
        <Button
          mx="20px"
          onClick={() => {
            onOpen();
            SetVarianteSeleccionada({});
          }}
          w="80px"
          h="80px"
          borderRadius="0px"
          boxShadow="lg"
        >
          + {variantes.length}
        </Button>
        <Variantes
          variantes={variantes}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          seleccionado={varianteSeleccionada}
          setSeleccionado={SetVarianteSeleccionada}
        />
        
      </Flex>
    </>
  );
}
export default VariantesMuestra;
