import { NavLink } from "react-router-dom";
import Button from "./components/Button";
import { TiHomeOutline } from "react-icons/ti";
import { TiDocumentText } from "react-icons/ti";
import { MdWorkHistory } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const { dark } = useTheme();
  const navButtons = [
    {
      text: "Home",
      path: "/",
      icon: (
        <TiHomeOutline className="h-6 w-6 md:h-5 md:w-5 min-[1100px]:h-6 min-[1100px]:w-6" />
      ),
    },
    {
      text: "Resume",
      path: "/resume",
      icon: (
        <TiDocumentText className="h-6 w-6 md:h-5 md:w-5 min-[1100px]:h-6 min-[1100px]:w-6" />
      ),
    },
    {
      text: "Work",
      path: "/work",
      icon: (
        <MdWorkHistory className="h-6 w-6 md:h-5 md:w-5 min-[1100px]:h-6 min-[1100px]:w-6" />
      ),
    },
    {
      text: "Blog",
      path: "/portfolio",
      icon: (
        <FaBlogger className="h-6 w-6 md:h-5 md:w-5 min-[1100px]:h-6 min-[1100px]:w-6" />
      ),
    },
    {
      text: "Contact",
      path: "/contact",
      icon: (
        <RiContactsBookLine className="h-6 w-6 md:h-5 md:w-5 min-[1100px]:h-6 min-[1100px]:w-6" />
      ),
    },
  ];
  return (
    <div
      className={` h-32 w-[90%] gap-3 p-5 min-[900px]:w-[80%] lg:w-[75%] min-[1100px]:gap-6 min-[1200px]:w-[70%] xl:w-[60%] ${
        dark ? "bg-black" : "bg-white"
      }  hidden items-center justify-center rounded-lg shadow-sm md:flex `}
    >
      {navButtons.map(({ path, text, icon }) => (
        <NavLink
          to={path}
          className={"w-[30%]"}
          preventScrollReset={true}
          key={path}
        >
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
