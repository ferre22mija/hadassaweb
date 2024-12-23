import { Box, Flex, Image, Circle } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenWidth = window.innerWidth; // Ancho de la pantalla
  const sliderWidth = screenWidth ; // Ancho del slider (300px menos que la pantalla)

  // Cambia de imagen automáticamente cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images.length]);

  // Cambia la imagen al hacer clic en un círculo
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      width={`${sliderWidth}px`}
      height={["200px","calc(100vh - 100px)"]}
      overflow="hidden"
      position="relative"
      mx="auto"
      boxShadow="lg"
    >
      {/* Contenedor de las imágenes */}
      <Flex
        transform={`translateX(-${currentIndex * sliderWidth}px)`}
        transition="transform 0.5s ease-in-out"
        width={`${sliderWidth * images.length}px`}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index}`}
            width={`${sliderWidth}px`}
            height="100%"
            objectFit="cover"
          />
        ))}
      </Flex>

      {/* Indicadores (círculos) */}
      <Flex
        position="absolute"
        bottom="20px"
        width="100%"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        {images.map((_, index) => (
          <Circle
            key={index}
            size="10px"
            bg={currentIndex === index ? "blue.500" : "gray.300"}
            cursor="pointer"
            onClick={() => goToSlide(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Slider;