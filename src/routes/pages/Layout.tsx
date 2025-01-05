import { Outlet } from "react-router-dom";
import HeaderPage from "../Layout/Header";
const RootLayout = () => {
  return (
    <>
      <HeaderPage />

      <Outlet />
    </>
  );
};

export default RootLayout;
