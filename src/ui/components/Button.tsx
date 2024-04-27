import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

type ButtonProp = {
  buttonType: string;
  children: React.ReactNode;
  background?: string;
};
export default function Button({
  buttonType,
  children,
  background,
}: ButtonProp) {
  const { dark } = useContext(ThemeContext);
  let buttonClass = "";
  switch (buttonType) {
    case "social": {
      buttonClass = `p-3 rounded-md ${background || ""}`;
      break;
    }
    case "navButton": {
      buttonClass = ``;
      break;
    }
    case "download": {
      buttonClass = `py-3 px-10 mt-12 ml-[15%] ${
        background || ""
      } flex justify-center gap-3 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-2xl text-xl`;
      break;
    }
    default:
      break;
  }

  return <button className={buttonClass}>{children}</button>;
}
