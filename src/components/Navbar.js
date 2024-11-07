// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import logo from "../assets/logo.svg"
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-orange-400 bg-opacity-25 shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex relative z-20 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="Asesorías Pernalete" className="h-8" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center  space-x-4 ">
              <Link
                to="inicio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-base cursor-pointer"
              >
                INICIO
              </Link>
              <p>|</p>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-base cursor-pointer"
              >
                SOBRE NOSOTROS
              </Link>
              <p>|</p>
              <Link
                to="courses"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-base cursor-pointer"
              >
                CLASES VIRTUALES
              </Link>
              <p>|</p>
              <div className="social-icons flex max-w-2xl justify-around">
                <a href="https://facebook.com" className="social-icon bg-black text-white rounded-full p-2 m-2 facebook">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" className="social-icon bg-black text-white rounded-full p-2 m-2  instagram">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" className="social-icon bg-black text-white rounded-full p-2 m-2  twitter">
                  <FaTwitter />
                </a>
              </div>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-black hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
              >
                CONTACTO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;