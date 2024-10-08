import React from 'react';
import { useCurriculo } from '../../../Context/Dados';
import './Skills.css'
const Skills = () => {
  const { textos } = useCurriculo();
  const { skillsData } = textos;

  return (
    <section className="skills">
      <h2>Habilidades</h2>
      <div className="skills-list">
        {skillsData.map(skill => (
          <div key={skill.id} className="skill-item">
            <img src={skill.image} alt={skill.skill} className="skill-image" />
            <div className="skill-info">
              <h3>{skill.skill}</h3>
              <p>Nível: {skill.nivel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
