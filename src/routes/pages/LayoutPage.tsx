import { Outlet } from "react-router-dom";
import HeaderPage from "../Layout/Header";
import MovieDetails from "../../components/components/MovieDetails";
const RootLayout = () => {
  return (
    <>
      <HeaderPage />
      <MovieDetails />
      <Outlet />
    </>
  );
};

export default RootLayout;
