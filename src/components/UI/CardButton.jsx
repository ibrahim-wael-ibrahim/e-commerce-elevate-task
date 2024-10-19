import PropTypes from "prop-types";

CardButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

function CardButton({
  onClick,
  buttonText,
  icon,
  bgColor = "bg-customYellow",
  textColor,
}) {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} w-3/6 hover:w-4/6 transition-all duration-1000 flex h-[50px] p-2 absolute -right-4 rounded-l-full justify-between items-center`}
    >
      <span className="w-9 aspect-square rounded-full bg-white mx-2 flex justify-center items-center">
        {icon}
      </span>
      <h1 className={`text-lg font-extrabold ${textColor}`}>{buttonText}</h1>
    </button>
  );
}

export default CardButton;
