import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress } from 'react-icons/si';

// Skill data with associated icons
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "SASS", icon: <FaSass className="text-pink-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-700" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
];

const Skills = () => {
  return (
    <section className="lg:py-[150px] bg-white" id="skills">
      <h2 className="text-center text-3xl text-primary1 font-bold mb-8">SKILLS</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {skills.map(({ name, icon }, index) => (
            <div
              key={index}
              className="shadow-md px-4 py-2 text-center font-semibold text-gray-700 rounded-lg transform transition-transform duration-200 hover:-translate-y-2 flex items-center justify-center"
            >
              <div className="mr-2">{icon}</div>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
