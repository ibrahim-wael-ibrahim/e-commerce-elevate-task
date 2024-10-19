import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IoClose } from "react-icons/io5";
import Card from "../../components/card/Card";
import CardButton from "../../components/UI/CardButton";
function Cart() {
  const { removeItemFromCart, cartItems } = useContext(CartContext);

  if (cartItems.length <= 0) {
    return (
      <div>
        <div className="flex justify-center items-center flex-wrap gap-4 p-4">
          <div className="text-3xl font-extrabold w-[300px] aspect-square flex justify-center items-center shadow-md rounded-3xl m-20">
            <span>no Item&apos;s in Cart</span>
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

export default Cart;
