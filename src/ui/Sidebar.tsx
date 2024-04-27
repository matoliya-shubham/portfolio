import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import Button from "./components/Button";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";

export default function Sidebar() {
  const { dark } = useContext(ThemeContext);
  return (
    <div
      className={[
        "w-1/3",
        "rounded-2xl",
        "drop-shadow-sm",
        "static",
        "flex",
        "justify-center",
        "align-middle",
        dark ? "bg-black" : "bg-white",
      ].join(" ")}
    >
      <div
        className={[
          "absolute",
          "w-3/5",
          "h-60",
          "top-[-7.5rem]",
          "left-[20%]",
          "rounded-xl",
          "flex",
          "justify-center",
          dark
            ? "bg-gradient-to-r from-[#543646] to-[#1f022f]"
            : "bg-gradient-to-r from-[#d3cce3] to-[#e9e4f0]",
        ].join(" ")}
      >
        <img src="src/assets/profile-pic.png" className="w-[96%]" />
      </div>
      <div className="mt-28 w-[90%] flex justify-center flex-col items-center">
        <h1
          className={[
            "text-3xl",
            "text-center",
            "font-bold",
            dark ? "text-gray-200" : "text-gray-600",
          ].join(" ")}
        >
          Shubham Matoliya
        </h1>
        <h3
          className={[
            "text-md",
            "mt-2",
            "text-gray-400",
            "inline-block",
            dark
              ? " py-1  inline-block px-3 bg-[#1D1D1D] rounded-md"
              : "text-lg ",
          ].join(" ")}
        >
          Full Stack developer
        </h3>
        <div className="flex justify-center align-middle  gap-3 mt-8">
          <Link to={"/"}>
            <Button
              buttonType="social"
              background={dark ? "bg-[#1D1D1D]" : "bg-[#f2f5f5]"}
            >
              <FaLinkedinIn
                className={`w-4 h-4 ${
                  dark ? "text-blue-700" : "text-blue-600"
                }  `}
              />
            </Button>
          </Link>
          <Link to={"/"}>
            <Button
              buttonType="social"
              background={dark ? "bg-[#1D1D1D]" : "bg-[#f2f5f5]"}
            >
              <FaXTwitter
                className={` w-4 h-4 ${
                  dark ? "text-gray-100" : "text-gray-900"
                } `}
              />
            </Button>
          </Link>
          <Link to={"/"}>
            <Button
              buttonType="social"
              background={dark ? "bg-[#1D1D1D]" : "bg-[#f2f5f5]"}
            >
              <FiGithub
                className={`w-4 h-4 ${
                  dark ? "text-gray-100" : "text-gray-900"
                }  `}
              />
            </Button>
          </Link>
          <Link to={"/"}>
            <Button
              buttonType="social"
              background={dark ? "bg-[#1D1D1D]" : "bg-[#f2f5f5]"}
            >
              <FaFacebookF
                className={`w-4 h-4 ${
                  dark ? "text-blue-700" : "text-blue-600"
                }  `}
              />
            </Button>
          </Link>
        </div>
        <ul
          className={`w-[90%] mt-12 ${
            dark ? "bg-[#1D1D1D]" : "bg-[#f2f5f5]"
          } pb-5 px-5 rounded-lg`}
        >
          <li className="pt-5 pb-3 border-b flex justify-start gap-3 border-gray-500">
            <Button
              buttonType="social"
              background={dark ? "bg-black" : "bg-white"}
            >
              <IoIosPhonePortrait className={`w-6 h-6 text-pink-600 `} />
            </Button>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <input
                type="tel"
                readOnly
                className={`text-md ${
                  dark ? "text-white" : "text-gray-900"
                }  bg-transparent border-none outline-none`}
                value={"+91-8952833364"}
              />
            </div>
          </li>
          <li className="pt-5 pb-3 border-b flex justify-start gap-3 border-gray-500">
            <Button
              buttonType="social"
              background={dark ? "bg-black" : "bg-white"}
            >
              <MdOutlineEmail className={`w-6 h-6 text-orange-600 `} />
            </Button>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <Link
                className={`${dark ? "text-white" : "text-gray-900"} `}
                to={{ pathname: "mailto:shubhammatoliya7@gmail.com" }}
              >
                shubhammatoliya7@gmail.com
              </Link>
            </div>
          </li>
          <li className="pt-5 pb-3 border-b flex justify-start gap-3 border-gray-500">
            <Button
              buttonType="social"
              background={dark ? "bg-black" : "bg-white"}
            >
              <FaLocationDot className={`w-6 h-6 text-blue-400 `} />
            </Button>
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <input
                readOnly
                className={`text-md ${
                  dark ? "text-white" : "text-gray-900"
                }  bg-transparent border-none outline-none`}
                value={"Bangalore, India"}
              />
            </div>
          </li>
          <li className="pt-5 pb-3 border-b flex justify-start gap-3 border-gray-500">
            <Button
              buttonType="social"
              background={dark ? "bg-black" : "bg-white"}
            >
              <FaCalendarAlt className={`w-6 h-6 text-purple-400 `} />
            </Button>
            <div>
              <p className="text-sm text-gray-500">Birthday</p>
              <input
                readOnly
                className={`text-md ${
                  dark ? "text-white" : "text-gray-900"
                }  bg-transparent border-none outline-none`}
                value={"May 27, 1990"}
              />
            </div>
          </li>
        </ul>
        <Button buttonType="download">
          <FaDownload className="w-6 h-6 " />
          <span>Download CV</span>
        </Button>
      </div>
    </div>
  );
}
