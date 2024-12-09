import { Box, BoxProps } from "@chakra-ui/react";
import { colors } from "../../../configVariables/colors";
import { cloneElement, ReactElement } from "react";
interface listadesplegable extends BoxProps {
  children: ReactElement;
  items: Array<any>;
}

function ListaDesplegable({ children, items, ...props }: listadesplegable) {
  return (
    <Box w="300px" bg={colors.orange} {...props}>
      {items.map((item, index) =>
        cloneElement(children, { key: index, ...item })
      )}
    </Box>
  );
}
export default ListaDesplegable;
