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
import useTheme from "../hooks/useTheme";
import { useMemo } from "react";

export default function Sidebar() {
  const { dark } = useTheme();
  const socialButtons = useMemo(
    () => [
      {
        pathname: "https://www.linkedin.com/in/shubham-matoliya/",
        icon: (
          <FaLinkedinIn
            className={`h-4 w-4 sm:h-5 sm:w-5 md:h-4 md:w-4 ${
              dark ? "text-blue-700" : "text-blue-600"
            } hover:text-pink-700`}
          />
        ),
      },
      {
        pathname: "https://twitter.com/Shubhammatoliy4",
        icon: (
          <FaXTwitter
            className={` h-4 w-4 sm:h-5 sm:w-5 md:h-4 md:w-4 ${
              dark ? "text-gray-100" : "text-gray-900"
            } hover:text-pink-700`}
          />
        ),
      },
      {
        pathname: "https://github.com/matoliya-shubham",
        icon: (
          <FiGithub
            className={`h-4 w-4 sm:h-5 sm:w-5 md:h-4 md:w-4 ${
              dark ? "text-gray-100" : "text-gray-900"
            } hover:text-pink-700 `}
          />
        ),
      },
      {
        pathname: "https://www.facebook.com/shubham.matoliya.1",
        icon: (
          <FaFacebookF
            className={`h-4 w-4 sm:h-5 sm:w-5 md:h-4 md:w-4 ${
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
        flex
        h-full
        w-full
        flex-col
        items-center
        justify-start
        rounded-2xl 
        pb-5
        drop-shadow-sm 
        xs:w-[95%] 
        sm:w-[90%] 
        md:w-1/3 
        ${dark ? "bg-black" : "bg-white"}
      `}
    >
      <div
        className={`
        -mt-24
        flex
        h-48 
        w-[60%]
        justify-center 
        rounded-xl
        xs:w-1/2 
        sm:-mt-28 
        sm:h-56
        md:-mt-20
        md:h-44
        md:w-[70%]
        min-[1100px]:w-[60%]
        min-[1200px]:h-52
        min-[1200px]:w-[55%]
        ${
          dark
            ? "bg-gradient-to-tr from-[#381b2a] via-[#640c3b] to-[#c00769]"
            : "bg-gradient-to-r from-pink-400 via-pink-200 to-pink-400"
        }
        `}
      >
        <img
          src="src/assets/profile-pic.png"
          className="w-[95%] drop-shadow-lg"
        />
      </div>
      <div className="mt-6 flex h-fit w-full flex-col items-center justify-start ">
        <h1
          className={`
            tab:text-2xl
            text-center
            text-2xl
            font-bold
            sm:text-3xl
            md:text-2xl
            ${dark ? "text-gray-200" : "text-gray-800"}
          `}
        >
          Shubham Matoliya
        </h1>
        <h3
          className={`mt-2
            inline-block
            px-4
            text-lg
            sm:mt-4
            sm:text-xl
            md:mt-2
            md:text-sm
            ${
              dark
                ? " rounded-md bg-[#1D1D1D] px-3 py-1 text-gray-400"
                : " text-gray-500 "
            }`}
        >
          Full Stack developer
        </h3>
        <div className="mt-4 flex justify-center gap-3 align-middle sm:mt-6 md:mt-4">
          {socialButtons.map(({ pathname, icon }) => (
            <a href={pathname} target="_blank" key={pathname}>
              <Button
                buttonType="social"
                background={dark ? "bg-[#1D1D1D]" : "bg-slate-100"}
              >
                {icon}
              </Button>
            </a>
          ))}
        </div>
        <ul
          className={` mt-8 ${
            dark ? "bg-[#1D1D1D]" : "bg-slate-100"
          }  w-[90%] rounded-lg px-4 pb-10`}
        >
          <li className="flex justify-start gap-3 border-b border-gray-500 pb-3 pt-5">
            <Button
              buttonType="social"
              background={dark ? "bg-black" : "bg-white"}
            >
              <IoIosPhonePortrait
                className={`h-6 w-6 text-pink-600 md:h-5 md:w-5`}
              />
            </Button>
            <div className="flex w-[75%] flex-col gap-1 text-sm ">
              <p className="text-sm text-gray-500">Phone</p>
              <a
                href="https://wa.me/8952833364"
                target="_blank"
                className={`break-words xs:text-lg md:text-sm lg:text-lg ${
                  dark ? "text-white" : "text-gray-900"
                }`}
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
                className={`h-6 w-6 text-orange-600 md:h-5 md:w-5 `}
              />
            </Button>
            <div className="flex w-[75%] flex-col gap-1 text-sm md:w-[70%]">
              <p className=" text-gray-500">Email</p>
              <a
                href="mailto:shubhammatoliya7@gmail.com"
                className={`xs:text-lg md:text-sm lg:text-lg ${dark ? "text-white " : "text-gray-900"} break-words`}
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
                className={`h-6 w-6 text-blue-400 md:h-5 md:w-5 `}
              />
            </Button>
            <div className="flex w-[75%] flex-col gap-1 text-sm">
              <p className=" text-gray-500">Location</p>
              <p
                className={` break-words xs:text-lg md:text-sm lg:text-lg ${
                  dark ? "text-white" : "text-gray-900"
                }  `}
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
                className={`h-6 w-6 text-purple-400 md:h-5 md:w-5 `}
              />
            </Button>
            <div className="flex w-[75%] flex-col gap-1 text-sm">
              <p className=" text-gray-500">Birthday</p>
              <p
                className={`break-words xs:text-lg md:text-sm lg:text-lg ${
                  dark ? "text-white" : "text-gray-900"
                }  `}
              >
                May 27, 1990
              </p>
            </div>
          </li>
        </ul>
        <Button buttonType="download">
          <FaDownload className="h-5 w-5 md:h-5 md:w-5 " />
          <span>Download CV</span>
        </Button>
      </div>
    </div>
  );
}
