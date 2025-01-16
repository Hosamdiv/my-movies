import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import MovieSlider from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import ActorsDetails from "../pages/ActoreDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<MovieSlider />} />
        </Route>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/actor/:id" element={<ActorsDetails />} />
      </Route>
    </>
  )
);

export default router;
