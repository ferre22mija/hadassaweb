import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react"
import { colors } from "../../../configVariables/colors"
import RigthRow from "../../icons/RightRow"
import ImageIcon from "../../icons/ImageIcon";

function DesplegableFoto() {
    let statusPhoto = false;
    return (
        <Box w="100%" bg="white" borderBottom="2px" borderColor={colors.teal} textColor={colors.orange}>
            <Flex alignItems="center">
                {statusPhoto ? <Image boxSize="40px" src="" /> : <ImageIcon boxSize="40px" />}
                <Spacer />
                <Text>subcategoria</Text>
                <Spacer />
                <RigthRow boxSize="30px" />
            </Flex>
        </Box>
    )
}
export default DesplegableFoto