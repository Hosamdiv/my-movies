import { Image, Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button";
import { RiShareForwardFill } from "react-icons/ri";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import CookieService from "../hooks/CookieService";
import { Toaster, toaster } from "../components/ui/toaster";

const HeaderPage = () => {
  const token = CookieService.get("jwt");
  console.log(token);
  const hello = () => {
    toaster.create({
      title: "Welcome to my site",
      description:
        "We're so glad to have you here. Enjoy exploring our site! 😊",
      type: "success",
    });
  };
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <nav>
        <div
          className="div-img min-h-[80vh] flex justify-center items-center
        relative flex-col
      "
        >
          <div className="absolute top-0 left-10 z-0 flex items-center justify-between w-[90%]">
            <Image src="/pngwing.com.png" w={140} alt="my-netflix" />
            {token ? (
              <Button
                onClick={hello}
                className="button-media px-5 bg-[#e50914] text-white font-semibold"
              >
                Click here
              </Button>
            ) : (
              <Link to={`/login`}>
                <Button className="button-media px-5 bg-[#e50914] text-white font-semibold">
                  Sign in
                </Button>
              </Link>
            )}
          </div>
          <div className="div-media relative text-center max-w-[480px] space-y-3">
            <h1 className="text-2gxl sm:text-4xl font-bold ">
              Unlimited movies, TV shows, and more
            </h1>
            <h2 className="text-xl font-bold">
              Starts at EGP 70. Cancel anytime.
            </h2>
            <p className="font-bold">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="div_inp_but flex justify-center items-center space-x-2 my-5 w-full ">
            <Input
              className="inp outline-none py-6 px-3 w-[50%]
              min-h-[16px] min-w-[16px] bg-blur-md border-2
                border-[#e50914]
            text-[18px]
            "
              type="text"
              placeholder="Email address"
            />
            <Button
              className="bg-[#e50914] text-white text-xl font-semibold py-[25px] px-6
            hover:bg-red-700"
            >
              Get Started <RiShareForwardFill />
            </Button>
          </div>
        </div>
      </nav>
      <div className="parent w-full">
        <div className="div-before"></div>
      </div>
      <Toaster />
    </>
  );
};

export default HeaderPage;
