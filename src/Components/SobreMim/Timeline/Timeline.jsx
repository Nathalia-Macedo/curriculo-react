import React, { useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { gsap } from 'gsap';
import { useCurriculo } from '../../../Context/Dados';
import 'react-vertical-timeline-component/style.min.css'; // Estilo padrão da biblioteca
import './Timeline.css'; // Importe o CSS personalizado

const Timeline = () => {
  const { timelineEventos, tema } = useCurriculo().textos; // Pega o tema do contexto
  const timelineRef = useRef([]); // Armazena referências para os elementos da linha do tempo

  useEffect(() => {
    // Animação ao adicionar elementos à linha do tempo
    if (timelineEventos && timelineEventos.length > 0) {
      gsap.from(timelineRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, [timelineEventos]); // O efeito será chamado quando timelineEventos mudar

  useEffect(() => {
    // Reexecuta a animação quando o tema mudar
    if (timelineEventos && timelineEventos.length > 0) {
      gsap.from(timelineRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, [tema]); // O efeito será chamado quando o tema mudar

  return (
    <div className={`timeline-container ${tema}`}>
      <VerticalTimeline>
        {timelineEventos && timelineEventos.length > 0 ? (
          timelineEventos.map((evento, index) => (
            <VerticalTimelineElement
              key={index}
              date={evento.year}
              iconStyle={{ background: tema === 'escuro' ? '#333' : '#007bff', color: '#fff' }} // Estilo do ícone
              icon={<div className="timeline-icon" />} // Estilo personalizado do ícone
              contentStyle={{ background: tema === 'escuro' ? '#222' : '#fff', color: tema === 'escuro' ? '#ddd' : '#333' }} // Estilo do conteúdo
              contentArrowStyle={{ borderRight: `7px solid ${tema === 'escuro' ? '#222' : '#fff'}` }} // Estilo da seta
              ref={el => (timelineRef.current[index] = el)} // Referência para cada elemento
            >
              <h3 className="vertical-timeline-element-title">{evento.title}</h3>
              <p>{evento.description}</p>
            </VerticalTimelineElement>
          ))
        ) : (
          <div>Nenhum evento encontrado na linha do tempo.</div>
        )}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
