import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

// Skill data with associated icons
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-cyan-500" /> },
  { name: "SASS", icon: <FaSass className="text-pink-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-700" /> },
];

const Skills = () => {
  // Split skills into groups of 2 and 3
  const skillGroups = [];
  for (let i = 0; i < skills.length; i += 5) {
    skillGroups.push(skills.slice(i, i + 2)); // Group of 2
    if (i + 2 < skills.length) {
      skillGroups.push(skills.slice(i + 2, i + 5)); // Group of 3
    }
  }

  return (
    <section className="lg:py-[150px] bg-white" id='skills'>
      <h2 className="text-center text-3xl text-primary1 font-bold mb-8">SKILLS</h2>
      <div className="max-w-4xl mx-auto">
        {skillGroups.map((group, index) => (
          <div key={index} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {group.map(({ name, icon }, skillIndex) => (
              <div 
                key={skillIndex} 
                className="shadow-md px-4 py-2 text-center font-semibold text-gray-700 rounded-lg transform transition-transform duration-200 hover:-translate-y-2 flex items-center justify-center"
              >
                <div className="mr-2"> {/* Margin right for spacing between icon and text */}
                  {icon} {/* Render icon */}
                </div>
                {name} {/* Skill name */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
