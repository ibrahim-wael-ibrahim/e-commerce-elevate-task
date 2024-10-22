// import icons
import { TbError404Off } from "react-icons/tb";

export default function Page404() {
  return (
    <div className="w-full h-screen flex justify-center items-center p-5 m-5 text-customGray">
      <div className="flex flex-col justify-center items-center gap-4">
        <span>
          <TbError404Off size={200} color="#F9BA48" />
        </span>
        <span className="text-4xl font-bold">page not found</span>
      </div>
    </div>
  );
}
