import React from 'react';
import Slider from "react-slick";
import { useCurriculo } from '../../../Context/Dados';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Skills.css';

const Skills = () => {
  const { textos, tema } = useCurriculo(); // Extraia o tema do contexto
  const { skillsData } = textos;

  // Configurações do carrossel
  const settings = {
    dots: true, // Mostra os pontinhos de navegação
    infinite: true, // Loop infinito
    speed: 500, // Velocidade de transição
    slidesToShow: 3, // Número de slides visíveis ao mesmo tempo
    slidesToScroll: 1, // Quantos slides mover por vez
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 2000, // Tempo entre as trocas automáticas
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={`skills ${tema}`}>
      <h2>Habilidades</h2>
      <Slider {...settings} className="skills-list">
        {skillsData.map(skill => (
          <div key={skill.id} className="skill-item">
            <div className="skill-info">
              <img src={skill.image} alt={skill.skill} className="skill-image" />
              <h3>{skill.skill}</h3>
              <p>Nível: {skill.nivel}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Skills;
