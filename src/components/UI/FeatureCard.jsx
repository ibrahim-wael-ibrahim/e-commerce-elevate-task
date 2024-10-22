// import library
import PropTypes from "prop-types";
// define prop types
FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

function FeatureCard({ title, description, icon }) {
  return (
    <div className="w-[300px] h-[200px] flex justify-center items-center gap-2 text-customGray">
      <div className="w-[140px] aspect-square">
        <img
          src={icon}
          alt={title}
          className="object-center object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-[#333333a8]">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
