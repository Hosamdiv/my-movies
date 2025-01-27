import { Image } from "@chakra-ui/react";
import { ITv } from "../../interface";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

interface IProps {
  product: ITv;
}

const TvSlider = ({ product }: IProps) => {
  const { id, first_air_date, name, vote_average, poster_path } = product;

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="px-3 py-4">
        <div className="">
          <Link to={`/tv/${id}`}>
            <Image
              width={200}
              height={250}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={name}
              className="w-full m-auto rounded-lg hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>
        <div>
          <h3 className="text-white text-center mt-2 ">
            {name?.length > 15 ? `${name.slice(0, 15)}...` : name}
          </h3>
        </div>

        <div className="flex items-center justify-around">
          <h2 className="flex items-center gap-1">
            <span className="text-yellow-500 text-xl">★</span>
            {vote_average.toFixed(1)}
          </h2>
          <h2>{first_air_date}</h2>
        </div>
      </div>
    </>
  );
};

export default TvSlider;
