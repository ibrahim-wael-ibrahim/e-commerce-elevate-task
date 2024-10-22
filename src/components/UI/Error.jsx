//  import library
import PropTypes from "prop-types";
//  import icons
import { BiSolidErrorCircle } from "react-icons/bi";
//  define prop types
Error.propTypes = {
  error: PropTypes.string,
};

export default function Error({ error }) {
  return (
    <div className="w-[300px] aspect-square   flex flex-col justify-start items-center gap-5 p-8 mx-auto my-32   text-customGray">
      <BiSolidErrorCircle size={120} color="red" />
      <h1 className="text-3xl font-extrabold">Error</h1>
      <p className="text-center">{error || "you have problem"}</p>
    </div>
  );
}
