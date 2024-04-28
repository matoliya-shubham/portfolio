import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import NameLogoDark from "../assets/logo-dark.png";
import NameLogoLight from "../assets/logo-light.png";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="flex w-full items-center justify-between ">
      <Link className="py-3" to={"/"}>
        <img
          src={dark ? NameLogoDark : NameLogoLight}
          className={`ml-28 h-24 -rotate-1 transform `}
        />
      </Link>
      <button
        className="mr-32 flex items-center justify-center gap-2 rounded-full  p-1 hover:bg-[#dd2455] hover:text-white"
        onClick={toggleTheme}
      >
        {dark ? (
          <CiLight className="h-10 w-10 text-white" />
        ) : (
          <IoMoonOutline className="h-8 w-8" />
        )}
      </button>
    </header>
  );
}
