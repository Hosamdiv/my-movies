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
import CookieService from "../hooks/CookieService";
import RegisterPage from "../pages/Register";
const token = CookieService.get("jwt");
const isAuthenticated = !!token;
console.log(token);

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
        <Route
          path="/login"
          element={<LoginPage isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/register"
          element={<RegisterPage isAuthenticated={isAuthenticated} />}
        />
      </Route>
    </>
  )
);

export default router;
