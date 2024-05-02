import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import useTheme from "../hooks/useTheme";

export default function AppLayout() {
  const { dark } = useTheme();

  useEffect(() => {
    if (dark) {
      document.body.classList.add("bg-dark");
    } else {
      document.body.classList.remove("bg-dark");
      document.body.classList.add("bg-light");
    }

    // if (isSidebarOpen) {
    //   document.body.classList.add("overflow-hidden");
    // } else {
    //   document.body.classList.remove("overflow-hidden");
    //   document.body.classList.add("overflow-auto");
    // }
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("bg-dark", "bg-light");
    };
  }, [dark]);

  return (
    <>
      <Header />
      <div className="mt-48 flex w-full flex-1 flex-col items-center justify-between gap-8 pb-10 sm:mt-56 md:mt-44  md:flex-row md:items-start  md:gap-4 md:px-4">
        <Sidebar />
        <div className="flex w-full flex-col items-center gap-6 rounded-2xl   drop-shadow-sm xs:w-[95%] sm:w-[90%]">
          <Navbar />
          <div
            className="w-full flex-grow rounded-lg bg-slate-100 "
            id="content-block"
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
