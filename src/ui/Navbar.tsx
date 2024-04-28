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
      icon: <TiHomeOutline className="w-6 h-6" />,
    },
    {
      text: "Resume",
      path: "/resume",
      icon: <TiDocumentText className="w-6 h-6" />,
    },
    {
      text: "Work",
      path: "/work",
      icon: <MdWorkHistory className="w-6 h-6" />,
    },
    {
      text: "Blog",
      path: "/portfolio",
      icon: <FaBlogger className="w-6 h-6" />,
    },
    {
      text: "Contact",
      path: "/contact",
      icon: <RiContactsBookLine className="w-6 h-6" />,
    },
  ];
  return (
    <div
      className={`w-[70%] h-32 p-5 gap-5 ${
        dark ? "bg-black" : "bg-white"
      }  rounded-lg flex justify-center items-center shadow-sm`}
    >
      {navButtons.map(({ path, text, icon }) => (
        <NavLink to={path} className={"w-[15%]"} preventScrollReset={true}>
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
