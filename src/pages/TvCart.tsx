import useAuthenticatedQuey from "../hooks/useAuthenticatedQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ITv } from "../interface";
import TvSlider from "../components/components/TvSlider";
import { Link } from "react-router-dom";

const TvPage = () => {
  // Fetch data for TV shows
  const { data: popularTV, isLoading: loadingPopularTV } = useAuthenticatedQuey(
    {
      queryKey: ["popularTV"],
      url: `/tv/popular?page=1`,
    }
  );

  const { data: topRatedTV } = useAuthenticatedQuey({
    queryKey: ["topRatedTV"],
    url: `/tv/top_rated?page=1`,
  });

  const { data: airingTodayTV } = useAuthenticatedQuey({
    queryKey: ["airingTodayTV"],
    url: `/tv/airing_today?page=1`,
  });

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

  if (loadingPopularTV) return <h2>Loading...</h2>;

  return (
    <>
      <div className="father_element space-y-4 bg-black pb-20">
        <div className="flex justify-between items-center">
          <h1 className="ml-10 text-2xl">Popular Tv : -</h1>
          <Link to={`/tv`}>
            <button className="px-5 py-2 bg-red-700 rounded-md mr-10 text-white font-semibold">
              All Tv
            </button>
          </Link>
        </div>
        <div className="slider-container w-[95%] m-auto">
          <Slider {...settings}>
            {popularTV?.results?.map((movie: ITv) => (
              <TvSlider key={movie.id} product={movie} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="father_element space-y-4 bg-black pb-20">
        <h1 className="ml-10 text-2xl">Top Rated :-</h1>
        <div className="slider-container w-[95%] m-auto">
          <Slider {...settings}>
            {topRatedTV?.results?.map((movie: ITv) => (
              <TvSlider key={movie.id} product={movie} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="father_element space-y-4 bg-black pb-20">
        <h1 className="ml-10 text-2xl">Airing Today :-</h1>
        <div className="slider-container w-[95%] m-auto">
          <Slider {...settings}>
            {airingTodayTV?.results?.map((movie: ITv) => (
              <TvSlider key={movie.id} product={movie} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default TvPage;
