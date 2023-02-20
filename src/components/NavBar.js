import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">FLAIR</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            About
          </a>
          <a href="#objectives" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Objectives
          </a>
          <a href="#approach" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
            Approach
          </a>
          <a href="#impact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
            Expected Impact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
