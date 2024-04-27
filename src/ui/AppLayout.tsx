import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { ThemeContext } from "../Context/ThemeContext";

export default function AppLayout() {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={
        dark ? "bg-dark h-[150vh] bg-repeat" : "bg-light h-[150vh] bg-repeat"
      }
    >
      <Header />
      <div className=" my-36 mx-20 flex  gap-8 h-[110vh]">
        <Sidebar />
        <div className="w-2/3  rounded-2xl drop-shadow-sm flex justify-start items-center flex-col">
          <Navbar />
          <div className="mt-6 h-full border w-full rounded-lg bg-slate-100">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
