import { Center, Flex, Image, Text } from "@chakra-ui/react";
import Titulo from "../../components/texto/Titulo";

function Ofertas() {
  const imagenes = [
    "https://scontent.fayp1-1.fna.fbcdn.net/v/t39.30808-6/467705936_122125338014531090_9039713239837778595_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WhCMdC6FZNcQ7kNvgGK3w4q&_nc_zt=23&_nc_ht=scontent.fayp1-1.fna&_nc_gid=AkGhwtaNPNf38hvD6TnfNwO&oh=00_AYDyCCQGT93Xm92KO2wyA_q_CPPWlOgQcU_NlCZqNScT2w&oe=67600A2F",
    "https://scontent.fayp1-1.fna.fbcdn.net/v/t39.30808-6/466434073_122122810880531090_860115009269419113_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_VafuG2uGnQQ7kNvgFufBzG&_nc_zt=23&_nc_ht=scontent.fayp1-1.fna&_nc_gid=ABO8bVEnD1TbaeKAiDiGO1S&oh=00_AYBpWGMG0qXh23anVVDSB3NxoMFKgoquVJA49GcH-q5duQ&oe=675FED50",
  ];
  return (
    <>
      <Center>
        <Titulo> OFERTAS!!!</Titulo>
      </Center>

      <Flex
        w="100%"
        direction={["column", "column","row"]}
        align="center"
        justify="center"
      >
        {imagenes.map((imagen, index) => {
          return <Image key={index} boxSize={["200px","400px"]} src={imagen} w="40%" m={4} />;
        })}
      </Flex>
    </>
  );
}
export default Ofertas;
