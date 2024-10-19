import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
function NavigationLink({ title, path }) {
  return (
    <NavLink
      to={path}
      end={path === "/"}
      className="flex justify-center items-center relative z-40 px-4 py-2 rounded-lg overflow-hidden transition-transform duration-1000 ease-in-out transform before:absolute before:m-auto before:h-[0px] before:w-[0px] before:rounded-full hover:before:w-[200px] hover:before:h-[200px] before:bg-customYellow before:transition-all before:duration-300 "
    >
      <span className="relative z-10">{title}</span>
    </NavLink>
  );
}

// PropTypes validation
NavigationLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavigationLink;
