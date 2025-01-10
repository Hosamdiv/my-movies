import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../pages/Layout";
import ProductsPage from "../pages/Products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<ProductsPage />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
