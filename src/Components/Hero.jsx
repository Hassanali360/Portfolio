import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const openResume = () => {
    window.open("/cv.pdf", "_blank");
  };
  


  return (
    <section className="flex flex-col items-center text-center lg:py-[130px] px-4 ">
      {/* Main Heading */}
      <h1 className="text-[80px]  font-bold text-primary1">
        Hi, I am <span className="text-secondary font-poppins">Hassan Ali</span>.
      </h1>

      {/* Subheading */}
      <h2 className="mt-4 text-xl md:text-2xl font-semibold text-primary1 font-poppins flex gap-3">
        A <p className='text-secondary'> Full Stack </p> Web Developer.
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-2xl text-gray-500 leading-relaxed">
      As a frontend developer, I thrive on turning creative ideas into seamless web experiences. I focus on crafting intuitive, responsive designs that prioritize user engagement and accessibility. With a strong foundation in Tailwind CSS, JavaScript, and React, I’m constantly exploring new technologies to enhance my skills and deliver high-quality code. 
      </p>

      {/* Buttons */}
      <div className="mt-8 flex items-center gap-4">
        <button
        onClick={openResume}
        className="px-6 py-2 border border-primary text-primary font-medium rounded hover:bg-secondary hover:text-white transition">
          Resume
        </button>
        
        <a
          href="https://github.com/Hassanali360"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-2xl hover:text-secondary transition duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary text-2xl hover:text-secondary transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Hero;
