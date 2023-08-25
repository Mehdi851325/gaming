
//Chakra ui
import { HStack, Image, Text } from '@chakra-ui/react'
//Logo
import logo from "../assets/Groot.webp"
//add components
import SwichColor from './SwichColor'

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} p={'10px'}>
        <Text fontWeight={"extrabold"} fontSize={"3xl"}>Groot Game</Text>
        <Image src={logo} h={"80px"} w={"auto"}></Image>
        <SwichColor />
    </HStack>
  )
}

export default NavBar