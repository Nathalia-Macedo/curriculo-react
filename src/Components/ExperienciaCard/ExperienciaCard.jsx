import React, { useState } from 'react';
import './ExperienciaCard.css'
const ExperienciaCard = ({ experiencia }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="experiencia-card">
      <div className="company-logo">
        <img src={experiencia.logo} alt={experiencia.empresa} />
      </div>
      <h3 className="company-name">{experiencia.empresa}</h3>
      <p className="work-period">{experiencia.anoEntrada} - {experiencia.anoSaida}</p>
      <button className="toggle-button" onClick={toggleDescription}>
        {isOpen ? 'Ver Menos' : 'Ver Mais'}
      </button>
      {isOpen && <p className="description">{experiencia.descricao}</p>}
    </div>
  );
};

export default ExperienciaCard;
