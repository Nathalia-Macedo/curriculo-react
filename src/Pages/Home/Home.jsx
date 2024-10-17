import './Home.css'
import React from 'react';
import { useCurriculo } from '../../Context/Dados';
import AulasParticulares from '../../Components/AulasParticulares/AulasParticulares';
import Contato from '../../Components/Contato/Contato';
import Header from '../../Components/Header/Header';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import SobreMim from '../../Components/SobreMim/SobreMim';

const Home = () => {
  const { textos, tema, alternarTema } = useCurriculo(); // Pega o tema do contexto

  return (
    <div className={`home-container ${tema}`}>
      <Header />
      
      {/* Botão para alternar tema */}
      <button className="toggle-theme" onClick={alternarTema}>
        {tema === 'claro' ? '🌙 ' : '☀️ '}
      </button>
      
      <SobreMim />
      <h1 id="projetos">Meus Projetos</h1>
      <div className='session'>
        {textos.projetos.map(projeto => (
          <ProjectCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
      <AulasParticulares />
      <Contato />
    </div>
  );
};

export default Home;
