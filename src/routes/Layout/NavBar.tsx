const NavBarPage = () => {
  return (
    <nav>
      <div
        className="div-img min-h-[80vh] flex justify-center items-center
         relative 
      "
      >
        <div className="absolute top-0 left-10 ">
          <img src="/public/pngwing.com.png" width={150} alt="my-netflix" />
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
      </div>
    </nav>
  );
};

export default NavBarPage;
