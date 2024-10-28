import { navbarLinks as esNavbarLinks } from "../data/navbarLinks.js";
import { navbarLinks as enNavbarLinks } from "../data/en/navbarLinks.js";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import blueLogo from "../assets/ifly-logo-azul.png";
import whiteLogo from "../assets/ifly-logo-blanco.png";
import yoVueloLogoBicolor from "../assets/yovuelo-logo-bicolor.png";

import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE_NUMBER,
  WHATSAPP_URL,
  EMAIL_ADDRESS,
} from "../consts.ts";

const Navbar = ({ pathname, lang }) => {
  const navbarLinks = lang === "en" ? enNavbarLinks : esNavbarLinks;
  const [openMobile, setOpenMobile] = useState(false);
  const [navBar, setNavbar] = useState(false);

  const handleHamburgerClick = () => {
    setOpenMobile(() => !openMobile);
    if (!openMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [subHoveredIndex, setSubHoveredIndex] = useState(null);

  const isActive = (menuItem, pathname) => {
    let selected =
      menuItem?.submenu?.some(
        (item) =>
          item.link === pathname ||
          item.link + "/" === pathname ||
          item.subsubmenu?.some(
            (subItem) =>
              subItem.link === pathname || subItem.link + "/" === pathname,
          ),
      ) ||
      menuItem?.subsubmenu?.some(
        (item) => item.link === pathname || item.link + "/" === pathname,
      ) ||
      menuItem.link === pathname ||
      menuItem.link + "/" === pathname;
    return selected;
  };

  const handleItemClick = (index) => {
    if (hoveredIndex == index) {
      setHoveredIndex(null);
      setSubHoveredIndex(null);
    } else setHoveredIndex(index);
  };

  const handleSubItemClick = (event, subIndex) => {
    event.stopPropagation();
    if (subHoveredIndex == subIndex) setSubHoveredIndex(null);
    else setSubHoveredIndex(subIndex);
  };

  return (
    <nav className="w-full h-0 sticky top-0 z-50 tracking-wider">
      <div
        className={`${
          navBar || openMobile ? "backdrop-blur" : ""
        } duration-300 bg-white shadow-md`}
      >
        <div className="px-5 max-w-7xl mx-auto ">
          <div
            className={`lg:h-32 relative flex h-20 items-center justify-between transition-all`}
            id="navbar"
          >
            <div className="flex w-full items-center justify-between">
              <a href={`${lang === "en" ? "/en" : "/"}`}>
                <img
                  src={yoVueloLogoBicolor.src}
                  alt="iFly logo"
                  className="w-36"
                />
              </a>
              <div className="hidden lg:flex gap-8 items-center">
                <ul className="flex gap-5 xl:gap-10 items-center">
                  {navbarLinks.map((item, index) => (
                    <li
                      key={index}
                      className={`${
                        isActive(item, pathname)
                          ? "underline decoration-main-blue decoration-2 underline-offset-[10px]"
                          : ""
                      } relative group last:no-underline`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-main-black font-semibold text-lg duration-300 hover:underline decoration-main-blue decoration-2 underline-offset-[10px] py-12 border-main-blue whitespace-nowrap group-last:btn-tertiary group-last:hover:no-underline group-last:px-10"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <span className="font-semibold cursor-default text-main-black text-lg duration-300 hover:underline decoration-main-blue decoration-2 underline-offset-[10px] py-12 border-main-blue whitespace-nowrap">
                          {item.name}
                        </span>
                      )}
                      {item.submenu && item.submenu.length > 0 && (
                        <ul
                          className={`absolute z-10 top-12 bg-main-black rounded-xl overflow-hidden whitespace-nowrap text-white left-0 duration-500 ${
                            hoveredIndex === index
                              ? "h-auto w-auto opacity-100"
                              : "h-0 w-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          {item.submenu.map((subitem, subIndex) => (
                            <li
                              key={subIndex}
                              className={`${
                                isActive(subitem, pathname)
                                  ? "bg-main-blue"
                                  : ""
                              } relative hover:bg-main-blue/90 duration-300`}
                              onMouseEnter={() => setSubHoveredIndex(subIndex)}
                              onMouseLeave={() => setSubHoveredIndex(null)}
                            >
                              {subitem.link ? (
                                <a
                                  className="py-4 px-6 block"
                                  href={subitem.link}
                                >
                                  {subitem.name}
                                </a>
                              ) : (
                                <span className="cursor-default p-3 block">
                                  {subitem.name}
                                </span>
                              )}

                              {subitem.subsubmenu &&
                                subitem.subsubmenu.length > 0 && (
                                  <ul
                                    className={`absolute z-20 top-0 bg-main-black whitespace-nowrap left-full duration-500 ${
                                      subHoveredIndex === subIndex
                                        ? "h-auto w-auto opacity-100"
                                        : "h-0 w-0 opacity-0 overflow-hidden"
                                    }`}
                                  >
                                    {subitem.subsubmenu.map(
                                      (subsubitem, subsubIndex) => (
                                        <li
                                          key={subsubIndex}
                                          className={`${
                                            isActive(subsubitem, pathname)
                                              ? "bg-main-blue"
                                              : ""
                                          } relative hover:bg-main-blue/90`}
                                        >
                                          <a
                                            href={subsubitem.link}
                                            className="block p-3"
                                          >
                                            {subsubitem.name}
                                          </a>
                                        </li>
                                      ),
                                    )}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <a
                  className="bg-main-blue font-bold text-main-black py-4 px-5 rounded-full duration-300 hover:text-white hover:bg-main-black"
                  href="#"
                >
                  Es
                </a>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
              <button
                type="button"
                className="mobile-menu-button relative inline-flex items-center justify-center rounded-md p-2 text-main-black"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={handleHamburgerClick}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`${openMobile ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="x-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>

                <svg
                  className={`${openMobile ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  id="hamburger-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          openMobile ? "max-h-screen" : "max-h-0 delay-300"
        } overflow-x-hidden duration-300 ease-in-out h-screen lg:hidden absolute w-full bg-main-black z-50 top-0`}
        id="mobile-menu"
      >
        <div className="flex justify-end pl-5 pr-[26px] py-6">
          <svg
            className={`text-white h-6 w-6 cursor-pointer`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.0"
            stroke="currentColor"
            aria-hidden="true"
            id="hamburger-icon"
            onClick={handleHamburgerClick}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>

        <a
          href={`${lang === "en" ? "/en" : "/"}`}
          className="text-white px-10 w-fit block leading-none uppercase font-semibold text-lg z-40 relative"
        >
          <img src={whiteLogo.src} alt="iFly logo" className="w-32" />
        </a>

        <div
          className={`absolute w-60 h-20 bg-main-blue top-14 z-30 duration-300  ${
            openMobile ? "translate-x-0 delay-300" : "-translate-x-full "
          }`}
        ></div>

        <ul className="px-4 pb-3 mt-5 pt-2 flex flex-col">
          {navbarLinks.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onClick={() => handleItemClick(index)}
            >
              {item.link ? (
                <a
                  href={item.link}
                  className="font-semibold p-5 block text-white text-lg duration-300 border-main-blue whitespace-nowrap group-last:bg-main-blue group-last:py-4 group-last:px-8 group-last:rounded-full group-last:mt-4 group-last:text-center group-last:mx-5"
                >
                  {item.name}
                </a>
              ) : (
                <div className="font-semibold p-5 w-full justify-between flex cursor-pointer text-white text-lg duration-300  border-main-blue whitespace-nowrap">
                  <p>{item.name}</p>
                  <div
                    className={`p-1 pointer-events-none duration-300 rounded-full ${
                      hoveredIndex === index
                        ? "bg-white -rotate-90"
                        : "bg-main-blue rotate-90"
                    } 
                    `}
                  >
                    <IoIosArrowForward
                      className={`${
                        hoveredIndex === index ? "text-main-blue" : "text-white"
                      } size-5`}
                    />
                  </div>
                </div>
              )}
              {item.submenu && item.submenu.length > 0 && (
                <ul
                  className={`z-10 ml-5 bg-main-black whitespace-nowrap text-white left-0 duration-500 overflow-hidden ${
                    hoveredIndex === index ? "max-h-[28rem]" : "max-h-0"
                  }`}
                >
                  {item.submenu.map((subitem, subIndex) => (
                    <li
                      key={subIndex}
                      className="relative"
                      onClick={(event) => handleSubItemClick(event, subIndex)}
                    >
                      {subitem.link ? (
                        <a
                          className="p-5 block font-semibold"
                          href={subitem.link}
                        >
                          {subitem.name}
                        </a>
                      ) : (
                        <div className="font-semibold p-5 w-full justify-between flex cursor-pointer text-white text-lg duration-300  border-main-blue whitespace-nowrap">
                          <p>{subitem.name}</p>
                          <div
                            className={`p-1 pointer-events-none duration-300 rounded-full ${
                              subHoveredIndex === subIndex
                                ? "bg-white rotate-90"
                                : "bg-main-blue -rotate-90"
                            } 
                    `}
                          >
                            <IoIosArrowForward
                              className={`${
                                subHoveredIndex === subIndex
                                  ? "text-main-blue"
                                  : "text-white"
                              } size-5`}
                            />
                          </div>
                        </div>
                      )}

                      {subitem.subsubmenu && subitem.subsubmenu.length > 0 && (
                        <ul
                          className={`z-20 ml-8 bg-main-black whitespace-nowrap left-full duration-500 overflow-hidden ${
                            subHoveredIndex === subIndex
                              ? "max-h-32"
                              : "max-h-0"
                          }`}
                        >
                          {subitem.subsubmenu.map((subsubitem, subsubIndex) => (
                            <li key={subsubIndex} className="relative">
                              <a
                                href={subsubitem.link}
                                className="block p-5 font-semibold"
                              >
                                {subsubitem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="p-5 px-10 text-white flex flex-col gap-3 overflow-hidden">
          <div className="flex gap-3 items-center">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="border p-2 w-fit border-white rounded-full bg-white cursor-pointer"
            >
              <MdEmail className="size-3 text-main-blue" />
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </div>
          <div className="flex gap-3 items-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="border p-2 w-fit border-white rounded-full bg-white"
            >
              <FaPhone className="size-3 text-main-blue" />
            </a>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          </div>

          <div className="flex gap-3 mt-2">
            <a href={FACEBOOK_URL} target="_blank">
              <span className="sr-only">Facebook</span>
              <svg
                className="size-6 text-main-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href={INSTAGRAM_URL} target="_blank">
              <span className="sr-only">Instagram</span>
              <svg
                className="size-6 text-main-blue"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href={WHATSAPP_URL} target="_blank">
              <span className="sr-only">Whatsapp</span>
              <svg
                className="size-6 text-main-blue"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
