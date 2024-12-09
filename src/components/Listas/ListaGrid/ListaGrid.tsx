import { Box, Grid } from "@chakra-ui/react";
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
interface listagridInterface {
  children: ReactElement;
  espaciado: string;
  filas: number | null;
  columnas: number;
  items:Array<any>;
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
      <Grid templateRows={`repeat(${filas},1fr)`} templateColumns={`repeat(${columnas},1fr)`} gap={espaciado} {...props}>
        {items.map((item, index) => 
          cloneElement(children, { key: index, ...item })
        )}
      </Grid>
      {filas ? <> hay paginacion</> :<> sin paginacion</>}
    </>
  );
}
export default ListaGrid;
