// Contato.js
import React from 'react';
import './Contato.css';
import { FaGithub, FaWhatsapp, FaInstagram, FaLinkedin, FaStore } from 'react-icons/fa';
import { useCurriculo } from '../../Context/Dados'; // Importando o hook do contexto

const Contato = () => {
  const { tema } = useCurriculo(); // Obtendo o tema do contexto

  return (
    <section id="contato" className={`contato-container ${tema}`}>
      <h2>Entre em Contato</h2>
      <div className="icones-contato">
        <a href="https://github.com/Nathalia-Macedo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="contato-icone" />
        </a>
        <a href="https://wa.me/71987257532" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp className="contato-icone" />
        </a>
        <a href="https://www.instagram.com/nath_dev_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="contato-icone" />
        </a>
        <a href="https://www.linkedin.com/in/nathalia-de-macedo-martins-4aa693253" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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
