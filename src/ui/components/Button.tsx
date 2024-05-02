import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import useTheme from "../../hooks/useTheme";

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
  const { dark } = useTheme();
  let buttonClass = "";
  switch (buttonType) {
    case "social": {
      buttonClass = `p-3 md:p-2 h-fit rounded-md ${background || ""}`;
      break;
    }
    case "navButton": {
      buttonClass = `aspect-square w-[100%] justify-center flex items-center flex-col gap-1 rounded-xl text-sm min-[1340px]:text-lg
      ${isActive ? (dark ? "active-dark" : "active-light") : ""}
      ${dark ? "hover-dark" : "hover-light"}`;
      break;
    }
    case "download": {
      buttonClass = `py-3 md:px-5 md:text-lg px-10 mt-5 ${
        background || ""
      } flex justify-center items-center gap-3 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-3xl text-xl `;
      break;
    }
    default:
      break;
  }

  return <button className={buttonClass}>{children}</button>;
}
