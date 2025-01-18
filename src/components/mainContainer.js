import { useSelector } from "react-redux";
import VideoTitle from "./videoTitle";
import VideoBackground from "./videoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.useNowPlayingMovies);
  if (!movies) return;
  const firstMovie = movies[0];
  const { original_title, overview, id } = firstMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
