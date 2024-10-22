//  import hooks
import { createContext, useState } from "react";
// import library
import PropTypes from "prop-types";
import { toast } from "sonner";
// define prop types
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Create the context
export const CartContext = createContext();

// Create the provider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const numberOfItemInCart = cartItems.length;

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.some(
        (cartItem) => cartItem.id === item.id
      );

      if (isItemInCart) {
        toast.error("Already have this product in Cart");

        return prevItems;
      }
      toast.success("Success Add item to Cart");

      return [...prevItems, item];
    });
  };

  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        numberOfItemInCart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
