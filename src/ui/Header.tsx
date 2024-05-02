import { Link, NavLink, useLocation } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import NameLogoDark from "../assets/logo-dark.png";
import NameLogoLight from "../assets/logo-light.png";
import { TiHomeOutline } from "react-icons/ti";
import { TiDocumentText } from "react-icons/ti";
import { MdWorkHistory } from "react-icons/md";
import { FaBlogger } from "react-icons/fa";
import { RiContactsBookLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useCallback, useEffect, useMemo, useState } from "react";
import useTheme from "../hooks/useTheme";
import useOutSideClose from "../hooks/useOutsideClose";

export default function Header() {
  const sideNav = useOutSideClose(hideNavbar);
  const location = useLocation();
  const { dark, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const navButtons = [
    {
      text: "Home",
      path: "/#home",
      icon: <TiHomeOutline className="tab:h-5 tab:w-5 h-6 w-6" />,
    },
    {
      text: "Resume",
      path: "/resume#resume-section",
      icon: <TiDocumentText className="tab:h-5 tab:w-5 h-6 w-6" />,
    },
    {
      text: "Work",
      path: "/work#work-section",
      icon: <MdWorkHistory className="tab:h-5 tab:w-5 h-6 w-6" />,
    },
    {
      text: "Blog",
      path: "/portfolio#blog-section",
      icon: <FaBlogger className="tab:h-5 tab:w-5 h-6 w-6" />,
    },
    {
      text: "Contact",
      path: "/contact#contact-section",
      icon: <RiContactsBookLine className="tab:h-5 tab:w-5 h-6 w-6" />,
    },
  ];
  const toggleOpen = () => {
    setIsSidebarOpen((open) => !open);
  };
  function hideNavbar() {
    setIsSidebarOpen(false);
  }

  const [isNavbarActive, setIsNavbarActive] = useState<boolean>(true);
  let prevScrollpos = useMemo(() => window.scrollY, []);

  const handleScroll = useCallback(() => {
    const nav = document.getElementById("navbar");
    if (window.scrollY == 0) {
      nav?.classList.remove("bg-gray-950", "bg-white");
      nav?.classList.add("bg-transparent");
    }
    const currentScrollPos = window.scrollY;
    if (prevScrollpos < currentScrollPos) {
      setIsNavbarActive(false);
    } else {
      setIsNavbarActive(true);
    }
    prevScrollpos = currentScrollPos;
  }, [dark]);

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      if (window.screen.width >= 640)
        window.scrollTo({ top: 940, behavior: "smooth" });
      else window.scrollTo({ top: 886, behavior: "smooth" });
    } else window.scrollTo({ top: 0, behavior: "smooth" });
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [location, handleScroll]);

  return (
    <header
      id="navbar"
      className={`fixed left-0 top-0 z-10 flex w-full items-center justify-between scroll-auto transition-transform duration-500 ease-linear  ${isNavbarActive ? " translate-y-0 " : "-translate-y-full "} ${dark ? "bg-gray-950" : "bg-white"} 
      `}
    >
      <Link className="mx-4 py-3 sm:mx-8" to={"/"}>
        <img
          src={dark ? NameLogoDark : NameLogoLight}
          className={`h-12  -rotate-1 transform sm:h-16 `}
        />
      </Link>
      <div className="mr-2 flex w-24 items-center justify-between sm:mx-8 ">
        <button
          className=" flex items-center justify-center rounded-full p-1 hover:bg-[#dd2455] hover:text-white"
          onClick={toggleTheme}
        >
          {dark ? (
            <CiLight className="h-8 w-8 text-white" />
          ) : (
            <IoMoonOutline className="h-6 w-6" />
          )}
        </button>
        <button onClick={toggleOpen} className="md:hidden">
          <RxHamburgerMenu
            className={`${dark ? "text-white" : "text-gray-800"} h-6 w-6 `}
          />
        </button>
      </div>
      <div
        ref={sideNav}
        className={`fixed ${isSidebarOpen ? "-translate-x-full" : ""} left-full  top-0 z-20 flex h-screen w-screen items-center justify-center xs:w-3/4 ${dark ? "bg-gray-950" : "bg-slate-100"}  overscroll-none transition-transform duration-200 ease-linear sm:w-1/2 md:hidden`}
      >
        <button
          className="absolute right-2 top-2 z-30 p-2 text-white"
          onClick={toggleOpen}
        >
          <MdClose
            className={`${dark ? "text-white" : "text-gray-800"} h-8 w-8 `}
          />
        </button>
        <ul className="flex h-fit w-full flex-col items-center justify-center border-t border-gray-600 ">
          {navButtons.map(({ text, path, icon }) => (
            <NavLink
              key={path}
              to={path}
              onClick={toggleOpen}
              preventScrollReset={false}
              className={`w-full ${dark ? "text-white" : "text-gray-900"} flex items-center justify-center border-b border-gray-600 `}
            >
              {({ isActive }) => (
                <li
                  className={`flex w-full items-center justify-center gap-4 py-5 ${isActive ? (dark ? " bg-gray-200 text-pink-700" : "border-0 bg-pink-700 text-white") : ""} text-xl`}
                >
                  <div className="flex w-1/2 items-center justify-start gap-4  ">
                    {icon}
                    <p>{text}</p>
                  </div>
                </li>
              )}
            </NavLink>
          ))}
        </ul>
      </div>
    </header>
  );
}
