// Timeline.js
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { useCurriculo } from '../../../Context/Dados';
import 'react-vertical-timeline-component/style.min.css'; // Estilo padrão da biblioteca
import './Timeline.css'; // Importe o CSS personalizado

const Timeline = () => {
  const { timelineEventos } = useCurriculo().textos;

  return (
    <VerticalTimeline>
      {timelineEventos.map((evento, index) => (
        <VerticalTimelineElement
          key={index}
          date={evento.year}
          iconStyle={{ background: '#007bff', color: '#fff', width: '30px', height: '30px', borderRadius: '50%' }} // Tamanho da bolinha
          icon={<div className="timeline-icon" />} // Estilo personalizado do ícone
          contentStyle={{ background: '#fff', color: '#333' }} // Estilo do conteúdo
          contentArrowStyle={{ borderRight: '7px solid #fff' }} // Estilo da seta
        >
          <h3 className="vertical-timeline-element-title">{evento.title}</h3>
          <p>{evento.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
