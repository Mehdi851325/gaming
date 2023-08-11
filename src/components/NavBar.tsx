import { HStack, Image, Text } from '@chakra-ui/react'
import logo from "../assets/Groot.webp"

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} h={"80px"} w={"auto"}></Image>
        <Text>Groot Game</Text>
    </HStack>
  )
}

export default NavBar