import './Home.css'
import React from 'react';
import { useCurriculo } from '../../Context/Dados';
import AulasParticulares from '../../Components/AulasParticulares/AulasParticulares';
import Contato from '../../Components/Contato/Contato';
import Header from '../../Components/Header/Header';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import SobreMim from '../../Components/SobreMim/SobreMim';
import Gallery from '../../Components/Galery/Galery';
import Formacao from '../../Components/Formacao/Formacao';
import Experiencias from '../../Components/Experiencias/Experiencias';
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
      <Experiencias/>
<Formacao/>
      <AulasParticulares />
      <Gallery/>
      <Contato />
    </div>
  );
};

export default Home;
