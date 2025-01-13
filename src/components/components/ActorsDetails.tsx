import { Image } from "@chakra-ui/react";
import { ICastData } from "../../interface";

interface IProps {
  castData: ICastData;
}
const ActorsDetails = ({ castData }: IProps) => {
  console.log(castData);

  return (
    <div className="px-3 py-4">
      <div className="">
        <Image
          width={200}
          height={250}
          src={`https://image.tmdb.org/t/p/w500${castData.profile_path}`}
          alt={castData.name}
          className="w-full m-auto rounded-lg hover:scale-105 hover:rotate-6 transition-transform duration-300"
        />
      </div>
      <div>
        <h3 className="text-white text-center mt-2 ">{castData.name}</h3>
      </div>
    </div>
  );
};

export default ActorsDetails;
