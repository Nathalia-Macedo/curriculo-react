// Header.js
import React, { useState } from "react";
import { FaBars, FaTimes, FaUserTie, FaEnvelope, FaCode, FaGraduationCap, FaUser, FaChalkboardTeacher, FaBook } from 'react-icons/fa'; // Ícones adicionados
import "./Header.css"; // Estilos atualizados

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Meu Portfólio</h1>
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <a href="#sobre">
              <FaUser className="nav-icon" /> Sobre Mim
            </a>
          </li>
          <li>
            <a href="#experiencias">
              <FaUserTie className="nav-icon" /> Experiências
            </a>
          </li>
          <li>
            <a href="#aulas">
              <FaChalkboardTeacher className="nav-icon" /> Aulas Particulares
            </a>
          </li>
          <li>
            <a href="#conteudos">
              <FaBook className="nav-icon" /> Conteúdos
            </a>
          </li>
          <li>
            <a href="#contato">
              <FaEnvelope className="nav-icon" /> Contato
            </a>
          </li>
          <li>
            <a href="#projetos">
              <FaCode className="nav-icon" /> Projetos
            </a>
          </li>
          <li>
            <a href="#formacao">
              <FaGraduationCap className="nav-icon" /> Formação
            </a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
