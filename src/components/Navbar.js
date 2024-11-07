// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import logo from "../assets/logo.svg"
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-orange-400 shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex relative z-20 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/">
              <img src={logo} alt="Asesorías Pernalete" className="h-8" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="inicio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Inicio
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Sobre Nosotros
              </Link>
              <Link
                to="courses"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Clases Virtuales
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;