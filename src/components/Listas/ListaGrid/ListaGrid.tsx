import { Box, BoxProps, Grid, Wrap } from "@chakra-ui/react";
import { cloneElement, ReactElement } from "react";

// esta lista tiene que ser configurable en cantidad
// de elementos por ancho y alto
/** ingresa :
 * - items
 * -props del box
 * - espaciado entra items
 * - filas y columnas
 * si se deja vacio las columnas carga todo los items,
 * si se define las filas, se hace una paginación
 */
interface listagridInterface extends BoxProps {
  children: ReactElement;
  espaciado?: string;
  filas?: number | null;
  columnas?: number;
  items: Array<any>;
}
function ListaGrid({
  children,
  espaciado,
  filas,
  columnas,
  items,
  ...props
}: listagridInterface) {
  return (
    <>
      
      <Wrap spacing={espaciado} {...props} justify='center' m={3}>
        {items.map((item, index) =>
          cloneElement(children, { key: index, ...item })
        )}
      </Wrap>
    </>
  );
}
export default ListaGrid;
