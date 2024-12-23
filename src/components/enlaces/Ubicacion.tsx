import { Flex, FlexProps, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { colors } from "../../configVariables/colors";
interface interfaceUbicaion extends FlexProps{
  ubicacion:string;
}
function Ubicacion({ubicacion,...props}:interfaceUbicaion) {
    const ubicaciones = ubicacion.split("/")
    let acumulado : string="";
  return (
    <Flex w="100%" textColor={colors.darkGray} bg={colors.gray} justifyContent="center" p="30px" {...props} >
        {ubicaciones.map((ubicacion,index)=>{
            acumulado = acumulado + ubicacion

            if(index < ubicaciones.length-1){
              acumulado = acumulado + "/";
              ubicacion = ubicacion + " / "
            }
            if(index === ubicaciones.length - 1){
              ubicacion = " " + ubicacion;   
              return (
                <Text key={index} >{ ubicacion}</Text>
              )
            }
            return(
                <Link key={index} to={acumulado}>
                  {ubicacion}
                </Link>
            )
        })}
    </Flex>
  )
}
export default Ubicacion