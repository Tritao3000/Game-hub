import { Genre } from "./UseGenres";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const UseGames = (selectedGenre: Genre | null) =>
  useData<Games>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default UseGames;
