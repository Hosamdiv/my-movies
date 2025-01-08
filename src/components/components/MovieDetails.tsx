import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@chakra-ui/react";
import useAuthenticatedQuey from "../../hooks/useAuthenticatedQuery";

interface IMovie {
  id: number;
  poster_path: string;
  title: string;
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
    url: `/movie/popular?api_key=146f9a97e85c0165202eaff23cb6c1f5&page=5`,
  });

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="father_element bg-black h-[100vh]">
      <div className="slider-container w-[95%] m-auto">
        <Slider {...settings}>
          {data.results.map((movie: IMovie) => (
            <div key={movie.id} className="p-2">
              <div className="">
                <Image
                  width={250}
                  height={300}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full m-auto rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-white text-center mt-2">{movie.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieDetails;
