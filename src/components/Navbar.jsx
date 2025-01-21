import React, { useState } from "react";
import { FaCode } from "react-icons/fa";

const menuData = [
  {
    label: "Web Development",
    subItems: [{ label: "React" }, { label: "Vue" }, { label: "Angular" }],
  },
  {
    label: "Mobile Apps",
    subItems: [
      { label: "Android" },
      { label: "iOS" },
      { label: "React Native" },
    ],
  },
  {
    label: "UI/UX Design",
    subItems: [{ label: "Figma" }, { label: "Sketch" }, { label: "Adobe XD" }],
  },
];

const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <ul
      className="container flex row-start-1 w-full justify-center items-start box-content space-x-1 "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <li className="flex flex-col px-4 py-1 h-full place-self-stretch align-baseline justify-self-start w-[10vw]">
        <button className="flex flex-col justify-start items-start  hover:bg-white ">
          {item.label}
        </button>
      </li>
      <li className=" flex flex-col px-2 py-1 h-full place-self-stretch align-baseline justify-self-start w-[10vw]">
        {open && item.subItems && (
          <div className="absolute top-5 m-auto py-2 px-1 border-l-2 border-white items-start justify-start">
            <div className="flex flex-col space-y-2  ">
              {item.subItems.map((subItem, index) => (
                <div
                  key={index}
                  className="left-auto py-0 px-1 hover:bg-white "
                >
                  {subItem.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-[#1cb5e0] mx-0 my-0 p-1rem">
      <div className="container mx-auto py-6 px-2">
        {/*Desktop Menu */}
        <ul className=" space-x-10 box-content flex items-center text-white justify-between">
          {/* Logo */}
          <li className="text-blue-900 text-xl ">
            <a href="/Inicio" className="flex space-x-2 items-center">
              Kommbea
              <FaCode className="p-0 mt-1 mx-2" />
            </a>
          </li>
          <li className="space-x-10 text-right text-blue-900 items-center">
            <a
              href="/services"
              role="menuitem"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <button
                className="transition-transform duration-300 hover:font-bold"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                SERVICES
              </button>
              {open && (
                <section
                  className="absolute w-40% bg-[#1cb5e0] shadow-lg border-solid border-1 border-transparent rounded-md divide-x-2 divide-white md:p-4 md:space-x-4 md:right-28 justify-evenly"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <div className="container w-full mx-auto px-2">
                    <ul className="flex flex-row space-y-2 space-x-1 items-start text-start justify-start">
                      <li className="flex flex-col p-2  text-center justify-start w-1/2">
                        <a href="/" className="py-2 px-1 hover:bg-white ">
                          CELULARESAKSJDKJASD
                        </a>
                        <a href="/" className="py-2 px-1 hover:bg-white ">
                          a
                        </a>
                        <a href="/" className="py-2 px-1 hover:bg-white ">
                          a
                        </a>
                        <a href="/" className="py-2 px-1 hover:bg-white ">
                          a
                        </a>
                        <a href="/" className="py-2 px-1 hover:bg-white ">
                          a
                        </a>
                      </li>
                      <li className=" flex flex-col text-start px-2 py-1 border-l-2 border-white h-full box-content w-2/3">
                        {menuData.map((item, index) => (
                          <MenuItem key={index} item={item} />
                        ))}
                      </li>
                    </ul>
                  </div>
                </section>
              )}
            </a>
            <a href="/aboutus" className="hover:text-bold">
              About Us
            </a>
            <a href="/blog" className="hover:text-bold">
              Blog
            </a>
            <a href="contactus" className="hover:text-bold">
              Contact Us
            </a>
          </li>
        </ul>
        {/* Mobile Menu */}
      </div>
    </nav>
  );
};

export default Navbar;
