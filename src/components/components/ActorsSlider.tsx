import { Image } from "@chakra-ui/react";
import { ICastData } from "../../interface";
import { Link } from "react-router-dom";

interface IProps {
  castData: ICastData;
}
const ActorsSlider = ({ castData }: IProps) => {
  // console.log(castData);

  return (
    <div className="px-3 py-4">
      <div className="">
        <Link to={`/actor/${castData.id}`}>
          <Image
            width={200}
            height={250}
            src={`https://image.tmdb.org/t/p/w500${castData.profile_path}`}
            alt={castData.name}
            className="w-full m-auto rounded-lg hover:scale-105 hover:rotate-6 transition-transform duration-300"
          />
        </Link>
      </div>
      <div>
        <h3 className="text-white text-center mt-2 ">{castData.name}</h3>
      </div>
    </div>
    
  );
};

export default ActorsSlider;
