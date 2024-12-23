import { Box, Image } from "@chakra-ui/react";
import { useRef } from "react";
import { colors } from "../../configVariables/colors";
interface interfaceMiniatura {
  image: any;
  selectedImage: number;
  index: number;
  handleThumbnailClick: (index: number) => void;
}
function Miniatura({
  image,
  selectedImage,
  index,
  handleThumbnailClick,
}: interfaceMiniatura) {
  // borderColor={selectedImage === index ? colors.orange : "blue"}
  return (
    <Box
      
      cursor="pointer"
      onClick={() => {
        handleThumbnailClick(index);
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        boxSize="80px"
        objectFit="cover"
        border="2px"
        borderColor={selectedImage === index ? colors.orange : "transparent"}
      />
    </Box>
  );
}
export default Miniatura;
