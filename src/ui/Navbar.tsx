import { NavLink } from "react-router-dom";
import Button from "./components/Button";
import { TiHomeOutline } from "react-icons/ti";
import { TiDocumentText } from "react-icons/ti";
import { MdWorkHistory } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function Navbar() {
  const { dark } = useContext(ThemeContext);
  const navButtons = [
    {
      text: "Home",
      path: "/",
      icon: <TiHomeOutline className="tab:h-5 tab:w-5 h-6 w-6" />,
    },
    {
      text: "Resume",
      path: "/resume",
      icon: <TiDocumentText className="tab:h-5 tab:w-5 h-6 w-6" />,
    },
    {
      text: "Work",
      path: "/work",
      icon: <MdWorkHistory className="tab:h-5 tab:w-5 h-6 w-6" />,
    },
    {
      text: "Blog",
      path: "/portfolio",
      icon: <FaBlogger className="tab:h-5 tab:w-5 h-6 w-6" />,
    },
    {
      text: "Contact",
      path: "/contact",
      icon: <RiContactsBookLine className="tab:h-5 tab:w-5 h-6 w-6" />,
    },
  ];
  return (
    <div
      className={`h-32 w-[70%] gap-5 p-5 lg:w-[90%] ${
        dark ? "bg-black" : "bg-white"
      }  flex items-center justify-center rounded-lg shadow-sm md:hidden`}
    >
      {navButtons.map(({ path, text, icon }) => (
        <NavLink to={path} className={"w-[20%]"} preventScrollReset={true}>
          {({ isActive }) => (
            <Button isActive={isActive} buttonType="navButton">
              {icon}
              <p>{text}</p>
            </Button>
          )}
        </NavLink>
      ))}
    </div>
  );
}
