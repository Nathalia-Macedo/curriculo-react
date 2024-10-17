// Home.js
import './Home.css'
import React from 'react';
import { useCurriculo } from '../../Context/Dados';
import AulasParticulares from '../../Components/AulasParticulares/AulasParticulares';
// import Experiencias from '../../Components/EXP/Exp';
import Contato from '../../Components/Contato/Contato';
import Header from '../../Components/Header/Header';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import SobreMim from '../../Components/SobreMim/SobreMim';
const Home = () => {
  const { textos } = useCurriculo();

  return (
    <>
    <Header/>
    <SobreMim/>
    <h1 id="projetos">Meus Projetos</h1>
     <div className='session'>
     
      {textos.projetos.map(projeto => (
        <ProjectCard key={projeto.id} projeto={projeto} />
      ))}
    </div>
    <AulasParticulares/>
      {/* <div className='session'>
        <Experiencias/>
    </div> */}
    <Contato/>
    </>
  );
};

export default Home;
