import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@chakra-ui/react";
import useAuthenticatedQuey from "../../hooks/useAuthenticatedQuery";

interface IMovie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
}

const MovieDetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { data, isLoading } = useAuthenticatedQuey({
    queryKey: ["movie"],
    url: `/movie/popular?page=1`,
  });

  console.log(data);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="father_element  space-y-4 bg-black pb-52">
      <h1 className="ml-10">Movies All :-</h1>
      <div className="slider-container w-[95%] m-auto">
        <Slider {...settings}>
          {data.results.map((movie: IMovie) => (
            <div key={movie.id} className="px-3 py-4">
              <div className="">
                <Image
                  width={200}
                  height={250}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full m-auto rounded-lg hover:scale-105 hover:rotate-6 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className=" text-white text-center mt-2">{movie.title}</h3>
              </div>
              <div className="flex items-center justify-between">
                <h2>{movie.vote_average}</h2>
                <h2>{movie.release_date}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieDetails;
