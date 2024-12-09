import { Flex } from "@chakra-ui/react";
import Categorias from "../../modulos/categorias/Categorias";
import Slider from "../../modulos/slider/Slider";
import ListaGrid from "../../components/Listas/ListaGrid/ListaGrid";

function Inicio() {
  const images = [
    "https://edit.org/img/blog/hsk-1024-banner-ferreteria-ofertas-descuentos-plantilla.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRccUcheYbIIzcIPUPxQ5DTZVysCKNQfUUJyA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT6erBC2HXn16B0TaweVxo5ddStWqhhqbWteJOjHkb_nnJsKFHQErYFe0I5bGEgT5sE_8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaNNhdbQnaPI9_SNp1UBKVED-cH7NwpvloDA&s",
  ];
  return (
    <>
      <Flex>
        {/* categorias */}
        <Categorias />
        {/* slider */}
        <Slider images={images} />
      </Flex>

      {/* ofertas */}

      {/* anunciones facebook */}

      {/* ultimos productos */}
      <ListaGrid />
    </>
  );
}
export default Inicio;
