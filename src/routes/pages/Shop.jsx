import { useContext } from "react";
import { useFetchProducts } from "../../hooks/useFetchProducts";

import { CartContext } from "../../context/CartContext";
import Card from "../../components/card/Card";
import CardButton from "../../components/UI/CardButton";
import Loading from "../../components/UI/Loading";
import Error from "../../components/UI/Error";

export default function Shop() {
  const { data, status, error } = useFetchProducts();
  const { addItemToCart } = useContext(CartContext);

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-4 p-4">
        {status === "loading" && <Loading />}
        {status === "error" && <Error error={error} />}
        {status === "receive" &&
          data?.map((product) => (
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
