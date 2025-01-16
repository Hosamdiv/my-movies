import useAuthenticatedQuey from "../hooks/useAuthenticatedQuery";
import { IMovie } from "../interface";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieSlider from "../components/components/MovieSlider";

const MoviesPage = () => {
  const { data, isLoading } = useAuthenticatedQuey({
    queryKey: ["movie"],
    url: `/movie/popular?page=1`,
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

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
        <div className="father_element space-y-4 bg-black pb-52">
          <h1 className="ml-10 text-2xl">Movies All :-</h1>
          <div className="slider-container w-[95%] m-auto">
            <Slider {...settings}>
              {data?.results?.map((movie: IMovie) => (
                <MovieSlider key={movie.id} product={movie} />
              ))}
            </Slider>
          </div>
        </div>
    </>
  );
};
export default MoviesPage;
