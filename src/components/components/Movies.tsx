import { Image } from "@chakra-ui/react";
import { IMovie } from "../../interface";
import { Link } from "react-router-dom";

interface IProps {
  product: IMovie;
}

const MoviesPage = ({ product }: IProps) => {
  const { id, release_date, title, vote_average, poster_path } = product;

  return (
    <div className="px-3 py-4">
      <div className="">
        <Link to={`/movie/${id}`}>
          <Image
            width={200}
            height={250}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className="w-full m-auto rounded-lg hover:scale-105 hover:rotate-6 transition-transform duration-300"
          />
        </Link>
      </div>
      <div>
        <h3 className="text-white text-center mt-2 ">
          {title.length > 15 ? `${title.slice(0, 15)}...` : title}
        </h3>
      </div>
      <div className="flex items-center justify-around">
        <h2 className="flex items-center gap-1">
          <span className="text-yellow-500 text-xl">★</span>
          {vote_average.toFixed(1)}
        </h2>
        <h2>{release_date}</h2>
      </div>
    </div>
  );
};

export default MoviesPage;
