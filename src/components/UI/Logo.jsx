import PropTypes from "prop-types";

Logo.propTypes = {
  className: PropTypes.string,
  styleLine: PropTypes.string,
  styleText: PropTypes.string,
};

function Logo({ className = "", styleText = "", styleLine = "" }) {
  return (
    <div className={`flex items-end relative ${className}`}>
      <h3 className={`text-2xl pl-3 font-extrabold ${styleText}`}>
        E-commerce
      </h3>
      <span
        className={`absolute w-[140px] h-2 bg-customYellow rounded-full ${styleLine}`}
      ></span>
    </div>
  );
}

export default Logo;
