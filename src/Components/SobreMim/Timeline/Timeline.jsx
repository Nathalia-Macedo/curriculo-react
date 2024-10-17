import React, { useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { gsap } from 'gsap';
import { useCurriculo } from '../../../Context/Dados';
import 'react-vertical-timeline-component/style.min.css'; // Estilo padrão da biblioteca
import './Timeline.css'; // Importe o CSS personalizado

const Timeline = () => {
  const { timelineEventos } = useCurriculo().textos; // Verifique se este caminho está correto

  // Verifique se timelineEventos não está vazio
  const timelineRef = useRef([]);

  useEffect(() => {
    if (timelineEventos && timelineEventos.length > 0) {
      // Animação para cada elemento da linha do tempo
      gsap.from(timelineRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, [timelineEventos]); // O efeito será chamado quando timelineEventos mudar

  return (
    <VerticalTimeline>
      {timelineEventos && timelineEventos.length > 0 ? (
        timelineEventos.map((evento, index) => (
          <VerticalTimelineElement
            key={index}
            date={evento.year}
            iconStyle={{ background: '#007bff', color: '#fff' }} // Estilo do ícone
            icon={<div className="timeline-icon" />} // Estilo personalizado do ícone
            contentStyle={{ background: '#fff', color: '#333' }} // Estilo do conteúdo
            contentArrowStyle={{ borderRight: '7px solid #fff' }} // Estilo da seta
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
  );
};

export default Timeline;
