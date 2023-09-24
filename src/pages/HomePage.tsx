import {Box, Grid, Show, GridItem, HStack } from "@chakra-ui/react"
import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"
import PlatformSelector from "../components/PlatformSelector"
import SearchInput from "../components/SearchInput"
import SortSelector from "../components/SortSelector"


const HomePage = () => {
  return (
    <Grid
    templateAreas={{ base: `"main"`, lg: `"aside main"` }}
    templateColumns={{ base: "1fr", lg: "200px 1fr" }}>
    
    <Show above="lg">
      <GridItem area={"aside"} paddingX={5}>
        <GenreList />
      </GridItem>
    </Show>
    <GridItem area={"main"}>
      <Box pl={2}>
        <GameHeading />
        <HStack spacing={5} mb={5}>
          <PlatformSelector/>
          <SortSelector/>
          <SearchInput/>
        </HStack>
      </Box>
      <GameGrid />
    </GridItem>
  </Grid>
  )
}

export default HomePage