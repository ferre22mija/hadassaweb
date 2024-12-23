import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Miniatura from "./Miniatura";
function CarruselFotos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number>(0);

  const images: any[] = [
    {
      id: 1,
      src: "https://via.placeholder.com/600x400?text=Producto+1",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/600x400?text=Producto+2",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/600x400?text=Producto+3",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://via.placeholder.com/600x400?text=Producto+4",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "https://via.placeholder.com/600x400?text=Producto+5",
      alt: "Image 4",
    },
    {
      id: 6,
      src: "https://via.placeholder.com/600x400?text=Producto+6",
      alt: "Image 4",
    },
    {
      id: 7,
      src: "https://via.placeholder.com/600x400?text=Producto+7",
      alt: "Image 4",
    },
    {
      id: 8,
      src: "https://via.placeholder.com/600x400?text=Producto+8",
      alt: "Image 4",
    },
    {
      id: 9,
      src: "https://via.placeholder.com/600x400?text=Producto+9",
      alt: "Image 4",
    },
  ];
  const changeScroll = (index: number) => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current?.scrollTop + (index - selectedImage) * 50,
      behavior: "smooth",
    });
    console.log({
      anterior: selectedImage,
      seleccionado: index,
      resta: (index - selectedImage) * 400,
      actual: scrollRef.current?.scrollTop,
    });
  };
  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
    changeScroll(index);
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    changeScroll(selectedImage - 1);
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    changeScroll(selectedImage + 1);
  };
  return (
    <Flex maxW="600px">
      {/* Thumbnails */}
      <Stack
        spacing={2}
        direction="column"
        maxH="400px"
        overflow="hidden"
        overflowY="scroll"
        ref={scrollRef}
        css={{
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari y Edge
          },
        }}
      >
        {images.map((image, index) => {
          return (
            <Miniatura
              key={index}
              image={image}
              index={index}
              selectedImage={selectedImage}
              handleThumbnailClick={handleThumbnailClick}
            />
          );
        })}
      </Stack>
      {/* Imagen principal */}
      <Box position="relative" mb={4} ml={3} className="group" transition="0.5s">
        <Image
          src={images[selectedImage].src}
          alt={images[selectedImage].alt}
          objectFit="cover"
          w="100%"
          h="400px"
          
        />
        {/* Botones de navegación */}
        <Button
          position="absolute"
          left="10px"
          top="50%"
          transform="translateY(-50%)"
          onClick={handlePrev}
          zIndex={1}
          display="none"
          _groupHover={{display:"flex"}}
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          position="absolute"
          right="10px"
          top="50%"
          transform="translateY(-50%)"
          onClick={handleNext}
          zIndex={1}
          
          display="none"
          _groupHover={{display:"flex"}}
        >
          <ArrowRightIcon />
        </Button>
      </Box>
      
    </Flex>
  );
}
export default CarruselFotos;
