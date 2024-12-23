import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { colors } from "../../../configVariables/colors";
interface interfaceListaAcordeon {
  filtros: Array<any>;
}
function ListaAcordeon({ filtros=[] }: interfaceListaAcordeon) {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>

      {filtros.map((filtro, index) => {
        return (
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: colors.orange, color: 'white' }}>
                <Box as="span" flex="1" textAlign="left">
                  {filtro.nombre}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {filtro.contenido}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
export default ListaAcordeon;
