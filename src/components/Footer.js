// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-sm">&copy; copyright 2024 | Created by Katherine Contreras </p>
          <a href='https://github.com/katherine-j-c-s' className="text-sm cursor-pointer">https://github.com/katherine-j-c-s</a>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;