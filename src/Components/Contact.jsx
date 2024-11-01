import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import the icons from react-icons

const Contact = () => {
  const email = "hassanmunir083@gmail.com";

  const handleIconClick = (platform) => {
    let url;
    switch (platform) {
      case 'facebook':
        url = 'https://www.facebook.com/hassanali'; // Replace with your Facebook link
        break;
      case 'instagram':
        url = 'https://www.instagram.com/__.hassanalii'; // Replace with your Instagram link
        break;
      case 'github':
        url = 'https://www.github.com/Hassanali360'; // Replace with your GitHub link
        break;
      case 'linkedin':
        url = 'https://www.linkedin.com'; // Replace with your LinkedIn link
        break;
      default:
        return;
    }
    window.open(url, '_blank'); // Open the link in a new tab
  };

  return (
    <section className="py-12 bg-white" id='contact'>
      <h2 className="text-center text-3xl font-bold mb-8 text-primary1">Contact Me</h2>
      <div className="max-w-md mx-auto text-center">
        <p className="mb-4 text-gray-700 text-lg">
          If you have any questions or would like to get in touch, feel free to reach out through social media!
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            onClick={() => handleIconClick('facebook')} 
            className="text-primary hover:text-secondary transition"
            aria-label="Facebook"
          >
            <FaFacebook size={30} />
          </a>
          <a 
            onClick={() => handleIconClick('instagram')} 
            className="text-primary hover:text-secondary transition"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>
          <a 
            onClick={() => handleIconClick('github')} 
            className="text-primary hover:text-secondary transition"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a 
            onClick={() => handleIconClick('linkedin')} 
            className="text-primary hover:text-secondary transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
