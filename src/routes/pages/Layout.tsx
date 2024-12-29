import { Outlet } from "react-router-dom";
import NavBarPage from "../Layout/NavBar";
const RootLayout = () => {
  return (
    <>
      <NavBarPage />

      <Outlet />
    </>
  );
};

export default RootLayout;
