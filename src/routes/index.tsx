import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import MoviesPage from "../pages/MoviesCart";
import MovieDetails from "../pages/MovieDetails";
import ActorsDetails from "../pages/ActorsDetails";
import TvDetails from "../pages/TvDetails";
import TvPage from "../pages/TvCart";
import TvAll from "../components/components/TvAll";
import MoviesAll from "../components/components/MoviesAll";
import LoginPage from "../pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route
            index
            element={
              <>
                <MoviesPage />
                <TvPage />
              </>
            }
          />
        </Route>
        <Route path="/movies" element={<MoviesAll />} />
        <Route path="/tv" element={<TvAll />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path="/actor/:id" element={<ActorsDetails />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </>
  )
);

export default router;
