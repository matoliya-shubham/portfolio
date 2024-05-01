import { Link } from "react-router-dom";
import { useContext, useMemo } from "react";
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
  const socialButtons = useMemo(
    () => [
      {
        pathname: "https://www.linkedin.com/in/shubham-matoliya/",
        icon: (
          <FaLinkedinIn
            className={`h-4 w-4 ${
              dark ? "text-blue-700" : "text-blue-600"
            } hover:text-pink-700 `}
          />
        ),
      },
      {
        pathname: "https://twitter.com/Shubhammatoliy4",
        icon: (
          <FaXTwitter
            className={` h-4 w-4 ${
              dark ? "text-gray-100" : "text-gray-900"
            } hover:text-pink-700`}
          />
        ),
      },
      {
        pathname: "https://github.com/matoliya-shubham",
        icon: (
          <FiGithub
            className={`h-4 w-4 ${
              dark ? "text-gray-100" : "text-gray-900"
            } hover:text-pink-700 `}
          />
        ),
      },
      {
        pathname: "https://www.facebook.com/shubham.matoliya.1",
        icon: (
          <FaFacebookF
            className={`h-4 w-4 ${
              dark ? "text-blue-700" : "text-blue-600"
            } hover:text-pink-700 `}
          />
        ),
      },
    ],
    [dark],
  );
  return (
    <div
      className={`
        tab:top-24 
        top-36
        flex
        h-full
        w-1/3
        flex-col 
        items-center
        justify-start 
        rounded-2xl 
        pb-5 
        drop-shadow-sm 
        md:w-full 
        min-[769px]:sticky
        lg:top-28
        ${dark ? "bg-black" : "bg-white"}
      `}
    >
      <div
        className={`
        tab:w-[70%] 
        tab:h-40 
        tab:-mt-20
        -mt-32
        flex
        h-64 
        w-[65%] 
        justify-center 
        rounded-xl 
        md:w-[35%] 
        lg:-mt-24 
        lg:h-48 
        ${
          dark
            ? "bg-gradient-to-r from-[#543646] to-[#1f022f]"
            : "bg-gradient-to-r from-[#d3cce3] to-[#e9e4f0]"
        }
        `}
      >
        <img src="src/assets/profile-pic.png" className=" drop-shadow-lg " />
      </div>
      <div className="mt-6 flex h-fit w-full flex-col items-center justify-start ">
        <h1
          className={`
            tab:text-2xl
            text-center
            text-3xl
            font-bold
            lg:text-2xl
            ${dark ? "text-gray-200" : "text-gray-600"}
          `}
        >
          Shubham Matoliya
        </h1>
        <h3
          className={[
            "",
            "mt-2",
            "text-gray-400",
            "inline-block",
            dark
              ? " inline-block  rounded-md bg-[#1D1D1D] px-3 py-1"
              : "text-lg ",
          ].join(" ")}
        >
          Full Stack developer
        </h3>
        <div className="mt-4 flex justify-center gap-3 align-middle">
          {socialButtons.map(({ pathname, icon }) => (
            <a href={pathname} target="_blank">
              <Button
                buttonType="social"
                background={dark ? "bg-[#1D1D1D]" : "bg-[#f2f5f5]"}
              >
                {icon}
              </Button>
            </a>
          ))}
        </div>
        <ul
          className={` mt-8 ${
            dark ? "bg-[#1D1D1D]" : "bg-[#f2f5f5]"
          } max-h-screen w-[85%] rounded-lg px-5 pb-10`}
        >
          <li className="flex justify-start gap-3 border-b border-gray-500 pb-3 pt-5">
            <Button
              buttonType="social"
              background={dark ? "bg-black" : "bg-white"}
            >
              <IoIosPhonePortrait
                className={`tab:h-5 tab:w-5 h-6 w-6  text-pink-600`}
              />
            </Button>
            <div className="w-[80%] lg:w-[70%]">
              <p className="text-sm text-gray-500">Phone</p>
              <a
                href="https://wa.me/8952833364"
                target="_blank"
                className={`tab:text-sm break-words md:text-lg ${
                  dark ? "text-white" : "text-gray-900"
                }  border-none bg-transparent outline-none`}
              >
                +91-8952833364
              </a>
            </div>
          </li>
          <li className="flex justify-start gap-3  border-b border-gray-500 pb-3 pt-5">
            <Button
              buttonType="social"
              background={dark ? "bg-black" : "bg-white"}
            >
              <MdOutlineEmail
                className={`tab:h-5 tab:w-5 h-6 w-6 text-orange-600 `}
              />
            </Button>
            <div className="tab:w-[70%] w-[80%] lg:w-[70%]">
              <p className="text-sm text-gray-500">Email</p>
              <a
                href="mailto:shubhammatoliya7@gmail.com"
                className={`tab:text-sm md:text-lg ${dark ? "text-white " : "text-gray-900"} break-words  `}
              >
                shubhammatoliya7@gmail.com
              </a>
            </div>
          </li>
          <li className="flex justify-start gap-3 border-b border-gray-500 pb-3 pt-5">
            <Button
              buttonType="social"
              background={dark ? "bg-black" : "bg-white"}
            >
              <FaLocationDot
                className={`tab:h-5 tab:w-5 h-6 w-6 text-blue-400 `}
              />
            </Button>
            <div className="w-[80%] lg:w-[70%]">
              <p className="text-sm text-gray-500">Location</p>
              <p
                className={`tab:text-sm break-words md:text-lg ${
                  dark ? "text-white" : "text-gray-900"
                }  border-none bg-transparent outline-none`}
              >
                Bangalore, India
              </p>
            </div>
          </li>
          <li className="flex justify-start gap-3 border-b border-gray-500 pb-3 pt-5">
            <Button
              buttonType="social"
              background={dark ? "bg-black" : "bg-white"}
            >
              <FaCalendarAlt
                className={`tab:h-5 tab:w-5 h-6 w-6 text-purple-400 `}
              />
            </Button>
            <div className="w-[80%] lg:w-[70%]">
              <p className="text-sm text-gray-500">Birthday</p>
              <p
                className={`tab:text-sm break-words md:text-lg ${
                  dark ? "text-white" : "text-gray-900"
                }  border-none bg-transparent outline-none`}
              >
                May 27, 1990
              </p>
            </div>
          </li>
        </ul>
        <Button buttonType="download">
          <FaDownload className="tab:h-5 tab:w-5 h-6 w-6" />
          <span>Download CV</span>
        </Button>
      </div>
    </div>
  );
}
