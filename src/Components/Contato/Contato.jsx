// Contato.js
import React from 'react';
import './Contato.css';
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin, FaStore } from 'react-icons/fa'; // Hotmart será representado por FaStore

const Contato = () => {
  return (
    <section id="contato" className="contato-container">
      <h2>Entre em Contato</h2>
      <div className="icones-contato">
        <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="contato-icone" />
        </a>
        <a href="https://wa.me/seu-numero" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp className="contato-icone" />
        </a>
        <a href="https://www.instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="contato-icone" />
        </a>
        <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="contato-icone" />
        </a>
        <a href="https://hotmart.com/seu-perfil" target="_blank" rel="noopener noreferrer" aria-label="Hotmart">
          <FaStore className="contato-icone" />
        </a>
      </div>
    </section>
  );
};

export default Contato;
