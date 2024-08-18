import { Box, Center } from "@chakra-ui/react";

function Nav({ children }) {
  return (
    <Box
      mx="3"
      textColor="white"
      _hover={{
        
        color: "black",
      }}
    >
      {children}
    </Box>
  );
}
export default Nav;
