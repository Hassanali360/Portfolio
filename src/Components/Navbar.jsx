import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center py-8 px-6 relative">
      {/* Desktop Menu */}
      <ul
        className={`
          ${
            isOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center gap-7
          border border-secondary rounded-full
          px-8 py-3
          bg-transparent
          font-poppins
        `}
      >
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[15px] font-bold text-primary hover:text-secondary duration-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[15px] font-bold text-primary hover:text-secondary duration-300"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer text-[15px] font-bold text-primary hover:text-secondary duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div
        className="md:hidden absolute right-6 text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FiX className="text-primary" />
        ) : (
          <FiMenu className="text-primary" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;