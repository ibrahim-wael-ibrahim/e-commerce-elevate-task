// import hooks
import { useContext } from "react";
// import components
import { CartContext } from "../../context/CartContext";
import Card from "../../components/card/Card";
import CardButton from "../../components/UI/CardButton";
// import icons
import { IoClose } from "react-icons/io5";

export default function Cart() {
  const { removeItemFromCart, cartItems } = useContext(CartContext);

  if (cartItems.length <= 0) {
    return (
      <div>
        <div className="flex justify-center items-center flex-wrap gap-4 p-4">
          <div className="text-3xl font-extrabold flex justify-center items-center   m-20">
            <span className="text-center">no Item&apos;s in Cart</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-4 p-4">
        {cartItems?.map((product) => (
          <Card
            product={product}
            key={product.id}
            actionButton={
              <CardButton
                onClick={() => removeItemFromCart(product.id)}
                buttonText="Remove"
                icon={<IoClose size={20} color="red" />}
              />
            }
          />
        ))}
      </div>
    </div>
  );
}
