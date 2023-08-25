import { HStack, Switch,  useColorMode } from "@chakra-ui/react"


const SwichColor = () => {
   const { toggleColorMode, colorMode}= useColorMode();


  return (
    <HStack>
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
    </HStack>
  )
}

export default SwichColor