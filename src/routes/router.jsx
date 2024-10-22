// import library
import { createBrowserRouter } from "react-router-dom";
// import Root ( layout my site )
import Root from "./layout/Root";
// import routes ( pages 📄 )
import Index from "./pages/Index"; // home page 🏠
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Page404 from "./pages/Page404"; // not found page 😥

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Page404 />,
    children: [
      { index: true, element: <Index /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:productId", element: <Product /> },
    ],
  },
]);

export default router;
