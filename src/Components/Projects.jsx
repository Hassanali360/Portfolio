import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: "Mind Leap",
    description: "A mental health website provides resources, support, and information on mental well-being. It typically includes articles, self-help tools, therapy options, and community forums to help users manage stress, anxiety, depression, and other mental health issues. The site often emphasizes accessibility and confidentiality, of.",
    technologies: ["TypeScript", "React", "Framer Motion"],
    githubLink: "https://github.com/Hassanali360/Mind-Leap---React-JS",
    liveLink: "https://mind-leap-react-js.vercel.app/"
  },
  {
    title: "Techpigeon - Portal",
    description: "As per client Requirment their website was converted from Softr to React. Techpigeon Pvt Ltd offering Business Consulting & Custom Cloud Software development services. We offer services based on the Microsoft Azure stack, Cloud App development for all major platforms (iOS, Android, Windows Phone). ",
    technologies: [ "JavaScript", "React"],
    githubLink: "https://github.com/Hassanali360/te",
    liveLink: "https://techpigeon.vercel.app/"
  },
  {
    title: "Tour and Travel",
    description: "This project is a basic static website built with React, designed as a practice exercise in creating multi-page applications. The website provides a mock interface for a tour and travel agency, showcasing essential web development techniques.",
    technologies: [ "Javascript", "React"],
    githubLink: "https://github.com/Hassanali360/tour_and_travel",
    liveLink: "https://tour-and-travel-iota.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section className="py-12 bg-white " id='projects'>
      <h2 className="text-center text-3xl font-bold text-primary1 mb-8">PROJECTS</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-2 text-secondary">{project.title}</h3>
            <p className="text-primary1 mb-4">{project.description}</p>
            <div className="flex justify-center space-x-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-sm font-semibold text-gray-500">{tech}</span>
              ))}
            </div>
            <div className="flex justify-center space-x-6 text-xl">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-600 hover:text-secondary" />
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="text-gray-600 hover:text-secondary" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
