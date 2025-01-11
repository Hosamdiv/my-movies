import { useParams } from "react-router-dom";
import useAuthenticatedQuey from "../hooks/useAuthenticatedQuery";
import { Image } from "@chakra-ui/react";
import { Button } from "../components/ui/button";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useAuthenticatedQuey({
    queryKey: ["movieDetails", `${id}`],
    url: `/movie/${id}`,
  });
  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div
      className="relative bg-cover bg-center max-w-full h-screen bg-fixed z-[999]"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full
       bg-gradient-to-b from-[rgba(3,0,0,0.2)]
       via-[rgba(25,0,0,0.3)] to-black"
      ></div>
      <div className="flex pt-36 pl-20 space-x-4 w-[90%] ">
        <div className="w-full m-auto">
          <Image
            w={250}
            h={350}
            className="rounded-xl mb-1 z-50 m-auto"
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt=""
            loading="lazy"
          />
          <Button
            className="w-full m-auto bg-red-700
          hover:bg-red-600 transition duration-300 ease-in-out
          "
          >
            Watch the movie at TMDB
          </Button>
        </div>
        <div className="text-white font-semibold z-50 space-y-3">
          <h1 className="text-3xl">
            {data.original_title} {data.original_name}
            <span className="font-bold text-red-700">
              {data.release_date.slice(0, 4)}
            </span>
          </h1>
          <p className="text-xl">{data.overview}</p>
          <div>
            {data.genres.map((item) => (
              <span
                key={item.id}
                className="px-3 py-2 mr-2 rounded-md bg-red-700"
              >
                {item.name}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center py-5 md:flex">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl">Vote_average</h2>
              <div className="m-auto ">
                <span className="border-4 border-red-700 rounded-full p-1">
                  {data.vote_average.toFixed(1)}
                </span>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl">Popularity</h2>
              <h2 className="m-auto">{data.popularity} </h2>
            </div>

            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl">Vote Count</h2>
              <h2 className="m-auto">{data.vote_count}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
