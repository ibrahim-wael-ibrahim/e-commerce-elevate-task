import { useLoaderData } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Error from "../../components/UI/Error";

export default function Product() {
  const { product, error } = useLoaderData(); // Use the data from the loader
  const { addItemToCart } = useContext(CartContext);

  if (error) return <Error error={error} />;

  const { title, price, description, category, image, rating } = product;

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-4 p-4 text-customGray">
        <div className="flex justify-center items-start flex-wrap gap-4 p-4">
          <div className="w-[400px] h-[600px] overflow-hidden border-[1px] rounded-3xl p-4 shadow-xl flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="object-cover object-center hover:scale-110 transition-all duration-1000 ease-in-out"
              loading="lazy"
            />
          </div>
          <div className="p-4 w-[400px] flex flex-col gap-4 items-start ">
            <h1 className="text-2xl font-bold ">{title}</h1>
            <span className="rounded-full px-2.5 py-0.5 bg-customYellow">
              {category}
            </span>
            <p className="w-[400px]">{description}</p>
            <div>
              <div className="flex items-center  py-1 ">
                {[...Array(5)].map((_, i) =>
                  i < Math.round(rating.rate) ? (
                    <FaStar color="#F9BA48" key={i} size={20} />
                  ) : (
                    <CiStar color="#F9BA48" key={i} size={20} />
                  )
                )}
              </div>
              <span className="rounded-full bg-customGray text-white px-4 py-1 text-xs font-semibold ">
                {rating.rate} 🌟 ({rating.count} reviews)
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                }).format(Math.round(price))}
              </span>
              <span className="text-xl line-through">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 2,
                }).format(Math.round(price + price * 0.25))}
              </span>
            </div>
            <button
              onClick={() => addItemToCart(product)}
              className="bg-customYellow w-[200px]  flex h-[50px] py-2 px-4  rounded-full justify-evenly items-center"
            >
              <span className="w-9 aspect-square rounded-full bg-white mx-2">
                <img
                  src="/assets/icons/shopping-cart-svgrepo-com.svg"
                  alt="shopping cart"
                  className="object-center object-cover"
                  loading="lazy"
                />
              </span>
              <h1 className="text-lg font-extrabold">Add to Cart</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
