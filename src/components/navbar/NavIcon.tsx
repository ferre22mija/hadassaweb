import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

function NavIcon({children}:{children:JSX.Element | ReactNode}) {
  return (
    <Box w="30px" mx="30px" > {children} </Box>
  )
} 
export default NavIcon