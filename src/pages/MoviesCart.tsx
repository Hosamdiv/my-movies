import useAuthenticatedQuey from "../hooks/useAuthenticatedQuery";
import { IMovie } from "../interface";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieSlider from "../components/components/MovieSlider";
import TvPage from "./TvCart";

const MoviesPage = () => {
  // Fetch data for Movie shows

  const { data: popularMovies, isLoading: loadingPopular } =
    useAuthenticatedQuey({
      queryKey: ["popular"],
      url: `/movie/popular?page=1`,
    });

  const { data: topRatedMovies } = useAuthenticatedQuey({
    queryKey: ["top_rated"],
    url: `/movie/top_rated?page=1`,
  });

  const { data: upcomingMovies } = useAuthenticatedQuey({
    queryKey: ["upcoming"],
    url: `/movie/upcoming?page=1`,
  });
  // console.log(data);

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

  if (loadingPopular) return <h2>Loading...</h2>;

  return (
    <>
      <div className="father_element space-y-4 bg-black pb-20">
        <h1 className="ml-10 text-2xl">Popular Movies : -</h1>
        <div className="slider-container w-[95%] m-auto">
          <Slider {...settings}>
            {popularMovies?.results?.map((movie: IMovie) => (
              <MovieSlider key={movie.id} product={movie} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="father_element space-y-4 bg-black pb-20">
        <h1 className="ml-10 text-2xl">Top Rated :-</h1>
        <div className="slider-container w-[95%] m-auto">
          <Slider {...settings}>
            {topRatedMovies?.results?.map((movie: IMovie) => (
              <MovieSlider key={movie.id} product={movie} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="father_element space-y-4 bg-black pb-20">
        <h1 className="ml-10 text-2xl">Upcoming :-</h1>
        <div className="slider-container w-[95%] m-auto">
          <Slider {...settings}>
            {upcomingMovies?.results?.map((movie: IMovie) => (
              <MovieSlider key={movie.id} product={movie} />
            ))}
          </Slider>
        </div>
      </div>
      <TvPage />
    </>
  );
};
export default MoviesPage;
