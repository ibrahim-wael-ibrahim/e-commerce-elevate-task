import { Toaster } from "sonner";
import { Outlet, useNavigation } from "react-router-dom";
// import components
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { CartProvider } from "../../context/CartContext";
import BubbliesCart from "../../components/UI/BubbliesCart";
import Loading from "../../components/UI/Loading";
export default function Root() {
  const navigation = useNavigation();
  return (
    <CartProvider>
      <div className="flex flex-col justify-start items-center h-full w-full">
        <Navbar />
        <main className="w-full md:px-4 min-h-screen">
          {navigation.state === "loading" ? <Loading /> : <Outlet />}
        </main>
        <Footer />
        <Toaster position="top-left" richColors closeButton />
      </div>
      <BubbliesCart />
    </CartProvider>
  );
}
