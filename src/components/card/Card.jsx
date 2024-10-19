import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import EyeShowButton from "../UI/EyeShowButton";

function Card({ product, actionButton }) {
  const { title, price, category, image, rating, id } = product;

  return (
    <article className="w-[400px] h-[580px] p-4 rounded-3xl shadow-lg backdrop-blur-3xl relative">
      <EyeShowButton id={id} />
      <div className="rounded-2xl w-full h-[300px] relative ">
        <span className="rounded-b-full bg-customGray text-white px-4 py-1 text-xs font-semibold absolute -bottom-[23px] right-3 z-0">
          {rating.rate} 🌟 ({rating.count} reviews)
        </span>
        <div className="w-full h-[300px] rounded-2xl overflow-hidden border-2 border-customGray relative">
          <img
            src={image}
            alt={title}
            className="object-cover object-center hover:scale-110 transition-all duration-500 ease-in-out"
            loading="lazy"
          />
          <div className="flex items-center absolute z-10 -bottom-0 -right-1 bg-[#fff] px-4 py-1 rounded-tl-full">
            {[...Array(5)].map((_, i) =>
              i < Math.round(rating.rate) ? (
                <FaStar color="#F9BA48" key={i} size={20} />
              ) : (
                <CiStar color="#F9BA48" key={i} size={20} />
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-start pl-4 pt-8 h-[248px]">
        <div className="flex flex-col justify-start items-start gap-2">
          <h3 className="text-2xl font-extrabold line-clamp-3">{title}</h3>
          <span className="rounded-full px-2.5 py-0.5 bg-customYellow">
            {category}
          </span>
        </div>
        <div className="flex justify-between items-center py-2 w-full relative">
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
          {actionButton}
        </div>
      </div>
    </article>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  actionButton: PropTypes.node.isRequired,
};

export default Card;
