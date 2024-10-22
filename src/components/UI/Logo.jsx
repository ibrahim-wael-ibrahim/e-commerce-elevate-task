//  import library
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//  define prop types
Logo.propTypes = {
  className: PropTypes.string,
  styleLine: PropTypes.string,
  styleText: PropTypes.string,
};

export default function Logo({
  className = "",
  styleText = "",
  styleLine = "",
}) {
  return (
    <Link to={"/"}>
      <div className={`flex items-end relative ${className} text-customGray `}>
        <h3 className={`text-2xl pl-3 font-extrabold ${styleText}`}>
          E-commerce
        </h3>
        <span
          className={`absolute w-[140px] h-2 bg-customYellow rounded-full ${styleLine}`}
        ></span>
      </div>
    </Link>
  );
}
