import { IMAGE_CDN_PATH } from "../utils/constants";
import TruncatedText from "./shared/truncatedText";

const MoviesCard = ({ posterPath, title, averageRating, overview }) => {
  if (!posterPath) return;
  return (
    <div className="min-w-[20%] rounded-md p-4 shadow-md">
      <figure className="hover:scale-105 transition-all cursor-pointer">
        <img src={IMAGE_CDN_PATH + posterPath} alt={title} />
        <figcaption>{averageRating}</figcaption>
      </figure>
      <article className="mt-3">
        <h2 className="text-2xl">{title}</h2>
        <TruncatedText overview={overview} maxLength={100} />
      </article>
    </div>
  );
};
export default MoviesCard;
