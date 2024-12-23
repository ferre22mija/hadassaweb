import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Input,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Dispatch, ReactElement, SetStateAction, useRef } from "react";
import Variante from "./Variante";
interface variantesInterface {
  variantes: Array<any>;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  seleccionado: any;
  setSeleccionado: Dispatch<SetStateAction<any>>;
}
// el drawer de variantes
function Variantes({
  variantes,
  isOpen,
  onOpen,
  onClose,
  seleccionado,
  setSeleccionado,
}: variantesInterface) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>variantes por color</DrawerHeader>

          <DrawerBody>
            <Wrap>
              {variantes.map((variante, index) => {
                return (
                  <WrapItem
                    key={index}
                    onClick={() => {
                      setSeleccionado(variante);
                      console.log(seleccionado)
                    }}
                  >
                    <Variante variante={variante} />
                  </WrapItem>
                );
              })}
            </Wrap>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              cerrar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {isOpen && (
        <Box
          display={seleccionado.imagen ? "block": "none"}
          position="fixed"
          top="50%"
          right="50%" // Justo fuera del Drawer
          transform="translate(0, -50%)"
          zIndex="1500" // Asegura que esté encima del overlay
        >
          <Image src={seleccionado.imagen} boxSize="400px" />
        </Box>
      )}
    </>
  );
}
export default Variantes;
