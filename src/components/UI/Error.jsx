import { BiSolidErrorCircle } from "react-icons/bi";
import PropTypes from "prop-types";
function Error({ error }) {
  return (
    <div className="w-[300px] aspect-square rounded-3xl  flex flex-col justify-start items-center gap-5 p-8 mx-auto my-32  shadow-xl ">
      <BiSolidErrorCircle size={120} color="red" />
      <h1 className="text-3xl font-extrabold">Error</h1>
      <p>{error || "you have problem"}</p>
    </div>
  );
}
Error.propTypes = {
  error: PropTypes.string,
};
export default Error;
