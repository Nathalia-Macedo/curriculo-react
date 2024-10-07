// Home.js
import './Home.css'
import React from 'react';
import { useCurriculo } from '../../Context/Dados';
import Experiencias from '../../Components/EXP/Exp';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
const Home = () => {
  const { textos } = useCurriculo();

  return (
    <>
     <h1>Meus Projetos</h1>
    
    <div className='home'>
      {textos.projetos.map(projeto => (
        <ProjectCard key={projeto.id} projeto={projeto} />
      ))}
    </div>
    <div className="home">
        <Experiencias/>
    </div>
    </>
  );
};

export default Home;
