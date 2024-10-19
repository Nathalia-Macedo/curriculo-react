import React from 'react';
import './ProjectCard.css'; 

const ProjectCard = ({ projeto }) => {
  return (
    
    <div  className="project-card">
      <div className="project-content">
        <h3>{projeto.nome_do_projeto}</h3>
        <p>{projeto.descricao_do_projeto}</p>
        <a href={projeto.link_do_projeto} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
      </div>
    </div>
  );
};

export default ProjectCard;
