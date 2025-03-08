import React, { useState, useEffect } from "react";
import { Checkroom } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { menus } from "./data";
import DrawerComp from "../subPages/DrawerComp";

const Navbar = () => {
  const location = useLocation();
  const [value, setValue] = useState(-1);

  useEffect(() => {
    const currentIndex = menus.findIndex((menu) => menu.path === location.pathname);
    setValue(currentIndex !== -1 ? currentIndex : -1);
  }, [location.pathname]);

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-700 to-black text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Logo */}
          <Link to="/" className="flex items-center text-2xl font-semibold">
            <Checkroom className="mr-2 text-3xl" />
            Fashion
          </Link>

          {/* Center: Navigation Tabs (Hidden on small screens) */}
          <div className="hidden md:flex space-x-6">
            {menus.map((menu, index) => (
              <Link
                key={index}
                to={menu.path}
                className={`relative text-lg font-medium transition-all duration-300 ease-in-out 
                  ${value === index ? "text-white after:w-full after:border-b-2 after:border-white" : "text-gray-300 after:w-0"}
                  after:absolute after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:ease-in-out
                  hover:text-white hover:after:w-full`}
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* Right: Button / Drawer for mobile */}
          <div>
            {/* Show Drawer for small screens */}
            <div className="md:hidden">
              <DrawerComp />
            </div>

            {/* Show Button for large screens */}
            <button className="hidden md:block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              XOXO
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
