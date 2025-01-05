import { Input } from "@chakra-ui/react";
import { Button } from "../../components/ui/button";
import { RiShareForwardFill } from "react-icons/ri";

const HeaderPage = () => {
  return (
    <>
      <nav>
        <div
          className="div-img min-h-[80vh] flex justify-center items-center
         relative flex-col
      "
        >
          <div className="absolute top-0 left-10 z-0 flex items-center justify-between w-[90%]">
            <img src="/public/pngwing.com.png" width={150} alt="my-netflix" />
            <Button className="bg-red-700 text-white font-semibold">
              Sign in
            </Button>
          </div>
          <div className="relative text-center max-w-[480px] space-y-3">
            <h1 className="text-4xl font-bold ">
              Unlimited movies, TV shows, and more
            </h1>
            <h1 className="text-xl font-bold">
              Starts at EGP 70. Cancel anytime.
            </h1>
            <h1 className=" font-bold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
          </div>
          <div className="flex justify-center space-x-2 my-5 w-full">
            <Input
              className="inp py-6 w-[50%] min-h-[16px] min-w-[16px] bg-blur-md border-2 border-red-600
            text-[18px]
            "
              type="text"
              placeholder="Email address"
            />
            <Button className="bg-red-700 text-white text-xl font-semibold py-[25px] px-8">
              Get Started <RiShareForwardFill />
            </Button>
          </div>
        </div>
      </nav>
      <div className="parent w-full ">
        <div
          className="div-before"
        ></div>
      </div>
    </>
  );
};

export default HeaderPage;
