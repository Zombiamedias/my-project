import React, { useState } from "react";
import { FaCode } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";


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

/*Items menu & submenu logic */
const MenuItem = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <ul
      className="container flex row-start-1 w-full justify-center items-start box-content space-x-1 "
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <li className="flex flex-col px-4 py-1 h-full place-self-stretch align-baseline justify-self-start w-[10vw]">
        <button className="flex flex-col justify-start items-start  hover:bg-white hover:text-[#1cb3e0] hover:font-bold">
          {item.label}
        </button>
      </li>
      <li className=" flex flex-col px-2 py-1 h-full place-self-stretch align-baseline justify-self-start md:w-[10vw] w-full">
        {open && item.subItems && (
          <div className="flex flex-col  relative md:absolute md:top-5 m-auto py-2 px-1 border-t-2 md:border-l-2 border-white items-start justify-start">
            <div className="flex flex-col space-y-2">
              {/*logic from submenu  */}
              {item.subItems.map((subItem, index) => (
                <div
                  key={index}
                  className="left-auto py-0 px-1 hover:bg-white hover:text-[#1cb3e0] hover:font-bold "
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
    <nav className="fixed flex top-0 left-0 right-0 w-full z-50 bg-[#1cb5e0] mx-0 my-0 p-1rem">
      <div className="container mx-auto py-6 px-2">
        {/*Desktop Menu */}
        <ul className="flex flex-col space-x-10 box-content  md:flex-row items-center text-white justify-between">
          {/* Logo */}
          <li className=" text-xl ">
            <a href="/Inicio" className="flex space-x-2 items-center">
              Kommbea
              <FaCode className="p-0 mt-1 mx-2" />
            </a>
          </li>
          {/* Menu Items */}
          <li className="space-x-10 text-right  items-center">
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
              {/*Menu desplegable*/}
              {open && (
                <section
                  className="absolute flex  flex-col  w-full  right-0 md:w-[40%] bg-[#1cb5e0]  shadow-lg  rounded-md divide-x-2 divide-white md:p-4 md:space-x-4 md:right-28 justify-evenly md:hidden"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <div className="container w-full mx-auto px-2">
                    <ul className="flex flex-col md:flex-row space-y-2 space-x-1 items-start text-start justify-start">
                      <li className="flex flex-col p-2  text-center justify-start w-full md:w-1/2">
                        <a href="/" className="py-2 px-1 hover:bg-white hover:text-[#1cb3e0] hover:font-bold">
                          CELULARESAKSJDKJASD
                        </a>
                        <a href="/" className="py-2 px-1 hover:bg-white hover:text-[#1cb3e0] hover:font-bold">
                          a
                        </a>
                        <a href="/" className="py-2 px-1 hover:bg-white hover:text-[#1cb3e0] hover:font-bold">
                          a
                        </a>
                        <a href="/" className="py-2 px-1 hover:bg-white hover:text-[#1cb3e0] hover:font-bold">
                          a
                        </a>
                        <a href="/" className="py-2 px-1 hover:bg-white hover:text-[#1cb3e0] hover:font-bold">
                          a
                        </a>
                      </li>
                      <li className=" flex flex-col text-start px-2 py-1 border-t-2 md:border-l-2 border-white h-full box-content w-full md:w-2/3">
                        {/*Submenu*/}
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
          
          <button className="absolute flex w-[45px] h-[45px] right-10 rounded-full border-4 border-white bg-white text-blue-500 hover:text-white hover:bg-blue-500 items-center justify-center transition-all ease-in-out duration-300 ">
          <FaWpforms className="text-[1.5rem]"/>
          </button>
          


          <button className="absolute right-10 w-[50px] h-[50px] flex items-center justify-center rounded-full border-4 border-white bg-white text-blue-500 hover:bg-blue-500 hover:text-white shadow-md transition-all duration-300 ease-in-out">
  <FaWpforms className="text-[1.5rem]" />
</button>

        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
