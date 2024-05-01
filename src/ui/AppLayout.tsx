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

  //   return (
  //     <div className="">
  //       <Header />

  //       <div className="body mt-[150px] flex pb-28">
  //         <Sidebar />

  //         <div className="right flex h-full flex-1 flex-col bg-blue-300">
  //           <Navbar />

  //           <div className="content max-h-full flex-1 overflow-y-auto">
  //             <Outlet />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );

  return (
    <div className="tab:gap-24 flex max-h-fit w-screen flex-col items-center gap-36 pb-10 lg:gap-28 ">
      <Header />
      <div className="flex w-[90vw] flex-1  justify-between gap-8  md:flex-col">
        <Sidebar />
        <div className="flex flex-1 flex-col items-center gap-6  rounded-2xl  drop-shadow-sm md:w-full">
          <Navbar />
          <div className=" w-full flex-grow  rounded-lg bg-slate-100 ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
