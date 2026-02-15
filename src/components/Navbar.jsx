import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        Akhila <span></span>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="theme-btn" onClick={toggleTheme}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  )
}

export default Navbar
