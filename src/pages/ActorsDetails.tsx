import { Image } from "@chakra-ui/react";
import useAuthenticatedQuey from "../hooks/useAuthenticatedQuery";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActorsMovieSlider from "../components/components/ActorsMovies";
import { IMovie } from "../interface";
const ActorsDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useAuthenticatedQuey({
    queryKey: ["actorsDetails", `${id}`],
    url: `/person/${id}`,
  });
  const { data: actorsMovies } = useAuthenticatedQuey({
    queryKey: ["actorsMovies", `${id}`],
    url: `/person/${id}/movie_credits`,
  });
  if (isLoading) return <h2>Loading...</h2>;

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
  return (
    <>
      <div className="div_media">
        <div className="actor_media flex space-x-4 mt-28 w-[90%] m-auto">
          <div className="">
            <Image
              w={200}
              borderRadius={"md"}
              src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`}
            />
          </div>
          <div className="description_media w-[70%] ">
            <h1 className="text-3xl opacity-100">{data?.name}</h1>
            <h2 className="text-xl opacity-50">{data?.place_of_birth}</h2>
            <h3 className="text-xl opacity-50">Birthday : {data?.birthday}</h3>
            <p className="opacity-50">{data?.biography}</p>
            <div className="mt-5 text-center">
              <h2 className="text-2xl">Popularity</h2>
              <h2>{data?.popularity}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 bg-black mt-10 pt-10 pb-52">
        <div className="slider-container w-[95%] m-auto">
          <Slider {...settings}>
            {actorsMovies?.cast.map((cast: IMovie) => (
              <ActorsMovieSlider key={cast.id} product={cast} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ActorsDetails;
