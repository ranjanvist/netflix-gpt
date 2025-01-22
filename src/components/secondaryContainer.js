import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  const PopularMovies = useSelector((store) => store.movies?.usePopularMovies);
  return (
    <div className="mt-60px relative">
      <MovieList title="Now Playing" movies={movies.useNowPlayingMovies} />
      <MovieList title="Popular Movies" movies={movies.usePopularMovies} />
    </div>
  );
};
export default SecondaryContainer;
