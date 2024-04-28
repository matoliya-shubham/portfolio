import { Link, Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../Context/ThemeContext";

export default function AppLayout() {
  const { dark } = useContext(ThemeContext);
  useEffect(() => {
    if (dark) {
      document.body.classList.add("bg-dark");
    } else {
      document.body.classList.remove("bg-dark");
      document.body.classList.add("bg-light");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("bg-dark", "bg-light");
    };
  }, [dark]);

  return (
    <div className="flex h-fit w-screen flex-col items-center justify-start gap-36 pb-10">
      <Header />
      <div className=" flex h-fit w-[90%] gap-8">
        <Sidebar />
        <div className="flex  w-2/3 flex-col items-center justify-start rounded-2xl drop-shadow-sm">
          <Navbar />
          <div className="mt-6 h-full w-full rounded-lg border bg-slate-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
