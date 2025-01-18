import MoviesCard from "./MoviesCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pt-12 px-5 bg-black text-white">
      <h1 className="text-3xl font-semibold mb-6">{title}</h1>
      <div className="flex items-center gap-1 overflow-x-auto overflow-y-hidden">
        {movies.map((item) => (
          <MoviesCard
            key={item.id}
            posterPath={item.poster_path}
            title={item.original_title}
            averageRatting={item.vote_average}
            overview={item.overview}
          />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
