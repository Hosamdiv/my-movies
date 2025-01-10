import { useParams } from "react-router-dom";
import useAuthenticatedQuey from "../hooks/useAuthenticatedQuery";
import { Image } from "@chakra-ui/react";

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useAuthenticatedQuey({
    queryKey: ["movieDetails", `${id}`],
    url: `/movie/${id}`,
  });
  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="m-5">
      <Image src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} />
      <h1>{data.title}</h1>
      <p>{data.overview}</p>
    </div>
  );
};
export default MovieDetails;
