import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

type ButtonProp = {
  buttonType: string;
  children: React.ReactNode;
  background?: string;
  isActive?: boolean;
};
export default function Button({
  buttonType,
  children,
  background,
  isActive,
}: ButtonProp) {
  console.log("active is ", isActive);
  const { dark } = useContext(ThemeContext);
  let buttonClass = "";
  switch (buttonType) {
    case "social": {
      buttonClass = `p-3 rounded-md ${background || ""}`;
      break;
    }
    case "navButton": {
      buttonClass = `py-4 w-[100%] flex justify-center items-center flex-col gap-1 rounded-xl 
      ${isActive ? (dark ? "active-dark" : "active-light") : ""}
      ${dark ? "hover-dark" : "hover-light"}`;
      break;
    }
    case "download": {
      buttonClass = `py-3 px-10 mt-12 ${
        background || ""
      } flex justify-center gap-3 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-2xl text-xl`;
      break;
    }
    default:
      break;
  }

  return <button className={buttonClass}>{children}</button>;
}

// ${
//     isActive && dark
//       ? " bg-[#1D1D1D] text-gray-200 bg-gradient-to-tr from-pink-600 via-pink-700 to-pink-800"
//       : "bg-[#f2f5f5] text-gray-200 bg-gradient-to-tr from-pink-500 via-pink-600 to-pink-600"
//   }
