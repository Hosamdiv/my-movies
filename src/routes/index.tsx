import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import ProductsPage from "../pages/Products";
import MovieDetails from "../pages/MovieDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<ProductsPage />} />
        </Route>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Route>
    </>
  )
);

export default router;
