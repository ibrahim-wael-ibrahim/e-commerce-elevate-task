import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function EyeShowButton({ id }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/product/${id}`}
      className={`absolute top-5 left-5 z-10 p-1 transition-all duration-1000 ease-in-out 
          ${
            isHovered
              ? "h-10 w-28 bg-customYellow rounded-full flex justify-evenly items-center"
              : "h-10 w-10 border-2 border-customYellow rounded-full flex justify-center items-center"
          }
        `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FaEye
        color={isHovered ? "" : "#F9BA48"}
        size={20}
        className={`transition-all duration-1000 ${
          isHovered ? "" : "text-center"
        }`}
      />
      {isHovered && (
        <span className="ml-2 transition-opacity duration-1000">show</span>
      )}
    </Link>
  );
}

EyeShowButton.propTypes = {
  id: PropTypes.number.isRequired,
};

export default EyeShowButton;
