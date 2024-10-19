import { createBrowserRouter } from "react-router-dom";

// import Root ( layout my site )
import Root from "./layout/Root";

// import routes ( pages 📄 )
import Index from "./pages/Index"; // home page 🏠
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Product from "./pages/Product";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:productId", element: <Product /> },
    ],
  },
]);

export default routes;
