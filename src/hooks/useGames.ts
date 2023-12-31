import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchData } from "../services/api-client";
import { Platform } from "./usePlatform";
import useGameQueryStore from "../store";
import { Genre } from "./useGenres";

const apiClient = new APIClient<Game>("/games");

interface Publisher {
  id: number;
  name: string;
}
export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = () =>{
const gameQuery =useGameQueryStore(s => s.gameQuery)
  return useInfiniteQuery<FetchData<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
  });
}

export default useGames;
