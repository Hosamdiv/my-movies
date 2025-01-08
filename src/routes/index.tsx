import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./pages/LayoutPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<RootLayout />}></Route>
      </Route>
    </>
  )
);

export default router;
