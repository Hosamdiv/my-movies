import MovieDetails from "../components/components/Movies";
import useAuthenticatedQuey from "../hooks/useAuthenticatedQuery";
import { IMovie } from "../interface";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useParams } from "react-router-dom";

const ProductsPage = () => {
  // const { id } = useParams();

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

  // const handlePageChange = (newPage: number) => {
  //   navigate(`/products/${newPage}`);
  //   setCurrentPage(newPage);
  // };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <div className="father_element space-y-4 bg-black pb-52">
        <h1 className="ml-10">Movies All :-</h1>
        <div className="slider-container w-[95%] m-auto">
          <Slider {...settings}>
            {data.results.map((movie: IMovie) => (
              <MovieDetails key={movie.id} product={movie} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default ProductsPage;
