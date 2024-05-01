import { Link } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import NameLogoDark from "../assets/logo-dark.png";
import NameLogoLight from "../assets/logo-light.png";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const { dark, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="flex w-full items-center justify-between md:bg-gray-950">
      <Link className="py-3" to={"/"}>
        <img
          src={dark ? NameLogoDark : NameLogoLight}
          className={`tab:h-16 ml-28 h-24 -rotate-1 transform md:ml-16 md:h-4 lg:h-20`}
        />
      </Link>
      <div className="mr-8 flex w-[15%] items-center justify-between">
        <button
          className=" flex items-center justify-center gap-1 rounded-full p-1 hover:bg-[#dd2455] hover:text-white"
          onClick={toggleTheme}
        >
          {dark ? (
            <CiLight className="h-10 w-10 text-white" />
          ) : (
            <IoMoonOutline className="h-8 w-8" />
          )}
        </button>
        <button>
          <RxHamburgerMenu
            className={`${dark ? "text-white" : "text-gray-800"} hidden h-8 w-8 md:block`}
          />
        </button>
      </div>
    </header>
  );
}
