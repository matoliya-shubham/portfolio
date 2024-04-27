import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import NameLogo from "../assets/Shubham.svg";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="flex items-center justify-between ">
      <Link to={"/"}>
        <img src={NameLogo} style={{ height: "8rem" }} />
      </Link>
      <button
        className="flex items-center justify-center gap-2 mr-32 rounded-full  p-1 hover:bg-[#dd2455] hover:text-white"
        onClick={toggleTheme}
      >
        {dark ? (
          <CiLight className="text-white w-10 h-10" />
        ) : (
          <IoMoonOutline className="w-8 h-8" />
        )}
      </button>
    </header>
  );
}
