// import hooks
import { useState, useContext } from "react";
// import components
import { CartContext } from "../../context/CartContext";
import useModal from "../../hooks/useModal";

export default function BubbliesCart() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  const { numberOfItemInCart, clearCart } = useContext(CartContext);
  const { ModalUI: ModalSendOrder, setModalIsOpen: OpenModalSendOrder } =
    useModal("you will send order ?", () => clearCart());
  const { ModalUI: ModalClearCart, setModalIsOpen: OpenModalClearCart } =
    useModal("you will Clear all item's from Cart ?", () => clearCart());
  return (
    <>
      <ModalSendOrder />
      <ModalClearCart />
      <div
        onClick={toggleMenu}
        className="w-0 h-0 z-[100] sticky bottom-0 left-0  block text-customGray"
      >
        {isOpen && (
          <div className="w-[200px]  rounded-3xl  backdrop-blur-lg absolute bottom-20 left-5 z-[100] shadow-md flex flex-col justify-end items-start gap-4 p-4">
            {numberOfItemInCart <= 0 && <div>you need chose item first</div>}
            <button
              onClick={OpenModalSendOrder}
              className="bg-customYellow px-4   flex h-[50px] p-2  rounded-full justify-center items-center"
              disabled={numberOfItemInCart <= 0}
            >
              Send Order
            </button>
            <button
              onClick={OpenModalClearCart}
              disabled={numberOfItemInCart <= 0}
              className="bg-customYellow px-4   flex h-[50px] p-2  rounded-full justify-center items-center"
            >
              Remove all Item&apos;s
            </button>
          </div>
        )}
        <div className="w-12 aspect-square bg-customYellow  rounded-full absolute bottom-5 left-5 z-[100] shadow-md flex justify-center items-center">
          <span className="w-8 rounded-full aspect-square bg-white z-[10] absolute"></span>
          <img
            src="/assets/icons/shopping-cart-svgrepo-com.svg"
            alt="shopping cart"
            className="object-center object-cover z-[20]"
            loading="lazy"
          />
          {numberOfItemInCart > 0 && (
            <span className="w-[20px] h-[20px] rounded-full bg-red-700 border-2  border-white absolute -top-1 -right-1  flex justify-center items-center z-20">
              <span className="text-white text-sm">{numberOfItemInCart}</span>
            </span>
          )}
        </div>
      </div>
    </>
  );
}
