import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { CartProvider } from "../../context/CartContext";
import { Toaster } from "sonner";
import BubbliesCart from "../../components/UI/BubbliesCart";
function Root() {
  return (
    <CartProvider>
      <div className="flex flex-col justify-start items-center h-full w-full">
        <Navbar />
        <main className="w-full md:px-4 min-h-screen">
          <Outlet />
        </main>
        <Footer />
        <Toaster position="top-left" richColors closeButton />
      </div>
      <BubbliesCart />
    </CartProvider>
  );
}

export default Root;
