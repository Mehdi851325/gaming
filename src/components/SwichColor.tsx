import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react"


const SwichColor = () => {
   const { toggleColorMode, colorMode}= useColorMode();


  return (
    <HStack>
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text>Dark mode</Text>
    </HStack>
  )
}

export default SwichColor