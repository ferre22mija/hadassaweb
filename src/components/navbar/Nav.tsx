import { Text, transition } from "@chakra-ui/react"
import { colors } from "../../configVariables/colors"
import  { ReactNode } from "react"

function Nav({ children }: { children: string | JSX.Element | ReactNode}) {
  return (
    <Text mx="30px"
    cursor="pointer"
    _hover={{
      color:colors.teal,
      transition:"0.3s"
    }}
     >{children}</Text>
  )
}
export default Nav