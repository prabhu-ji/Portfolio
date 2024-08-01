import PropTypes from 'prop-types'; // Import PropTypes

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <nav>
      <button onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}

// Define PropTypes for the component
Navbar.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Navbar;
