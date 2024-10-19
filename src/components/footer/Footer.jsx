import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import Logo from "../UI/Logo";

function Footer() {
  return (
    <footer className="bg-customGray h-[300px] w-full flex flex-col justify-between items-center pt-8 mt-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <Logo styleText="text-white" />
        <p className="text-white text-xl text-center">
          Contrary to popular belief, Lorem Ipsum is not simply
        </p>
        <div className="flex justify-center items-center  gap-4 py-4">
          <CiFacebook size={48} className=" fill-customYellow" />
          <CiInstagram size={48} className=" fill-customYellow" />
          <CiTwitter size={48} className=" fill-customYellow" />
          <CiYoutube size={48} className=" fill-customYellow" />
        </div>
      </div>
      <div className="bg-black p-2 w-full text-customYellow text-md flex justify-center items-center">
        &copy; - By Ibrahim wael Ibrahim -
      </div>
    </footer>
  );
}

export default Footer;
