import PropTypes from 'prop-types';
import logo from "../assets/projects/logo.png";
import logo2 from "../assets/projects/logo2.png";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { IoMoon, IoSunny } from "react-icons/io5";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className={`mb-20 flex items-center justify-between py-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-12 h-auto"
          src={isDarkMode ? logo : logo2}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/prabhu-ji/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-cyan-500 transition" />
        </a>
        <a href="https://github.com/prabhu-ji" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-cyan-500 transition" />
        </a>
        <a href="https://www.instagram.com/prabhulogs/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-cyan-500 transition" />
        </a>
        <a href="mailto:prabhuji2910@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="hover:text-cyan-500 transition" />
        </a>
        {isDarkMode ? (
          <IoSunny onClick={toggleTheme} className="text-yellow-500 cursor-pointer hover:text-yellow-300 transition" />
        ) : (
          <IoMoon onClick={toggleTheme} className="text-gray-800 cursor-pointer hover:text-gray-600 transition" />
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Navbar;
