import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addVideoTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    const filterData = jsonData.results.filter(
      (video) => video.type === "Trailer"
    );
    dispatch(addVideoTrailer(filterData));
  };
  useEffect(() => {
    getMoviesVideos();
  }, []);
};
export default useMovieTrailer;
