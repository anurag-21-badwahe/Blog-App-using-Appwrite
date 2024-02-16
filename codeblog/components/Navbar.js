"use client"
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">Code Blog</div>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="text-white hover:text-blue-200">Home</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-blue-200">About</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-blue-200">Services</a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-blue-200">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
