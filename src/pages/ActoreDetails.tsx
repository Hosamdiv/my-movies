import { Image } from "@chakra-ui/react";
import useAuthenticatedQuey from "../hooks/useAuthenticatedQuery";
import { useParams } from "react-router-dom";

const ActorsDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useAuthenticatedQuey({
    queryKey: ["actorsDetails", `${id}`],
    url: `/person/${id}`,
  });
  console.log(data);
  if (isLoading) return <h2>Loading...</h2>;
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
    </>
  );
};

export default ActorsDetails;
