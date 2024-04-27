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
      <div className=" my-36 mx-20 flex gap-12 h-[110vh]">
        <Sidebar />
        <div className="w-2/3 bg-white rounded-2xl drop-shadow-sm">
          <Navbar />
          <div></div>
        </div>
      </div>
    </div>
  );
}
