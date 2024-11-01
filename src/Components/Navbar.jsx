import React, { useState } from 'react';
import { Link } from 'react-scroll'; // smooth scroll
import { FiMenu, FiX } from 'react-icons/fi'; // menu and close icons from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between lg:px-[250px] px-[50px] py-10 bg-transparent text-white">
      {/* Logo */}
      <div className="text-3xl font-bold cursor-pointer font-poppins">
        <Link id='hero//'
          to="hero" // Assuming 'hero' is the id of your hero section
          smooth={true}
          duration={500}
          className="text-secondary"
          onClick={() => setIsOpen(false)} // Close the menu when clicking the logo
        >
          Hassan.
        </Link>
      </div>

      {/* Menu Items */}
      <ul className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block gap-7 font-poppins`}>
        <li className="md:ml-6 md:my-0 my-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[15px] font-bold text-primary hover:text-secondary duration-300"
            onClick={() => setIsOpen(false)} // Close the menu on link click
          >
            Projects
          </Link>
        </li>
        <li className="md:ml-6 md:my-0 my-4">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[15px] font-bold text-primary hover:text-secondary duration-300"
            onClick={() => setIsOpen(false)} // Close the menu on link click
          >
            Skills
          </Link>
        </li>
        <li className="md:ml-6 md:my-0 my-4">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[15px] font-bold text-primary hover:text-secondary duration-300"
            onClick={() => setIsOpen(false)} // Close the menu on link click
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden text-3xl cursor-pointer" onClick={toggleNav}>
        {isOpen ? <FiX className="text-primary" /> : <FiMenu className="text-primary" />}
      </div>
    </nav>
  );
};

export default Navbar;
