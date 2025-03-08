import React from "react";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { menus } from "./data";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <NavLink to='/' className="text-2xl font-semibold">Fashion</NavLink>
          <p className="mt-2 text-gray-400">
            Elevate your style, embrace the fashion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">Quick Links</h3>
          {menus.map((menu,index)=>(
            <NavLink className="text-gray-400 hover:text-white transition"
             key={index} to={menu.path}>{menu.name}</NavLink>
          ))}
        </div>

        {/* Social Media */}
        
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Fashion. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
