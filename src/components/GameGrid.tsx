//chakra Ui
import { SimpleGrid, Text } from "@chakra-ui/react";
//add hooks
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import CardContainer from "./CardContainer";
import { Genre } from "../hooks/useGenres";

interface Props{
  selectedGenre : Genre | null ;
}

const GameGrid = ({selectedGenre} : Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        p={"10px"}
        spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer  key={skeleton}>
              {" "}
              <CardSkeleton />{" "}
            </CardContainer>
          ))}
        {data.map((game) => (
          <CardContainer key={game.id}>
            <GameCard  game={game} />
          </CardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
