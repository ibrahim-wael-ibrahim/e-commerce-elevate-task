import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Card from "../../components/card/Card";
import CardButton from "../../components/UI/CardButton";
import Error from "../../components/UI/Error";

export default function Shop() {
  const { data, error } = useLoaderData();
  const { addItemToCart } = useContext(CartContext);

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-4 p-4">
        {error ? <Error error={error} /> : null}
        {data?.map((product) => (
          <Card
            product={product}
            key={product.id}
            actionButton={
              <CardButton
                onClick={() => addItemToCart(product)}
                buttonText="Add to Cart"
                icon={
                  <img
                    src="/assets/icons/shopping-cart-svgrepo-com.svg"
                    alt="shopping cart"
                    className="object-center object-cover"
                    loading="lazy"
                  />
                }
              />
            }
          />
        ))}
      </div>
    </div>
  );
}
