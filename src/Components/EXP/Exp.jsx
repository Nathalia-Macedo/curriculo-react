// Experiencias.js
import React from 'react';
import { useCurriculo } from '../../Context/Dados';
import ExperienciaCard from '../ExperienciaCard/ExperienciaCard';
import './Exp.css'; 

const Experiencias = () => {
  const { textos } = useCurriculo();

  return (
    <section id="experiencias" className="experiencias-section">
      <h2>Experiências</h2>
      <div className="experiencias-container">
        {textos.experiencias.map((exp, index) => (
          <ExperienciaCard experiencia={exp} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Experiencias;
