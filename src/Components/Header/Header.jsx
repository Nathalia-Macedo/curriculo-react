// Header.js
import React, { useState } from "react";
import { FaBars, FaTimes, FaUserTie, FaEnvelope, FaCode, FaGraduationCap, FaUser, FaChalkboardTeacher } from 'react-icons/fa';
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Meu Portfólio</h1>
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#sobre" onClick={toggleMenu}>
                <FaUser className="nav-icon" /> Sobre Mim
              </a>
            </li>
            <li>
              <a href="#experiencias" onClick={toggleMenu}>
                <FaUserTie className="nav-icon" /> Experiências
              </a>
            </li>
            <li>
              <a href="#aulasparticulares" onClick={toggleMenu}>
                <FaChalkboardTeacher className="nav-icon" /> Aulas Particulares
              </a>
            </li>
            <li>
              <a href="#contato" onClick={toggleMenu}>
                <FaEnvelope className="nav-icon" /> Contato
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={toggleMenu}>
                <FaCode className="nav-icon" /> Projetos
              </a>
            </li>
            <li>
              <a href="#formacao" onClick={toggleMenu}>
                <FaGraduationCap className="nav-icon" /> Formação
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
