import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const tarilerVideo = useSelector((store) => store.movies.videoTrailer[0]);
  useMovieTrailer(movieId);
  if (!tarilerVideo) return;
  return (
    <div className="w-screen overflow-hidden">
      <iframe
        className="aspect-video w-screen"
        src={`https://www.youtube.com/embed/${tarilerVideo.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
};
export default VideoBackground;
