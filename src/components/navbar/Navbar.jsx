// define components
import NavLinks from "./NavLinks";
import Logo from "../UI/Logo";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 h-[60px]  backdrop-blur-lg flex  justify-between  items-center py-2  px-4   z-10">
      <Logo className="pl-4" />
      <NavLinks />
    </header>
  );
}