// Header.jsx
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './header.css';

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") || "dark");

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("currentMode", newTheme);
  };

  const closeModal = () => setShowModal(false);

  return (
    <header className="header">
      {/* Mobile */}
      <div className="header-mobile">
        <button className="btn icon-menu" onClick={() => setShowModal(true)} aria-label="Open menu">
          &#9776;
        </button>
        <button className="btn icon-theme" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === "dark" ? <FaMoon size={18} /> : <FaSun size={18} />}
        </button>
      </div>

      {/* Desktop */}
      <nav className="nav-desktop">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">AboutMe</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button className="btn icon-theme" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <FaMoon size={18} /> : <FaSun size={18} />}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="btn icon-close" onClick={closeModal} aria-label="Close menu">
              &times;
            </button>
            <ul>
              <li><a href="#home" onClick={closeModal}>Home</a></li>
              <li><a href="#about" onClick={closeModal}>AboutMe</a></li>
              <li><a href="#projects" onClick={closeModal}>Projects</a></li>
              <li><a href="#contact" onClick={closeModal}>Contact</a></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
