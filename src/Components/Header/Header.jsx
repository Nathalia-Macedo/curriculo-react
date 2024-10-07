// Header.js
import React from "react";
import "./Header.css"; // Estilos, se necessário

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#experiencias">Experiências</a></li>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#formacao">Formação</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
