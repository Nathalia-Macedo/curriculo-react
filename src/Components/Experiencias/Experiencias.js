import React, { useState, useEffect } from 'react';
import { useCurriculo } from '../../Context/Dados';
import { motion } from 'framer-motion';
import './Experiencias.css';

const Experiencias = () => {
  const { textos } = useCurriculo();
  const { tema } = textos; // Extraindo a variável tema do contexto
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const toggleExperience = (index) => {
    if (expandedIndex === index) {
      clearTimeout(timeoutId);
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      const id = setTimeout(() => {
        setExpandedIndex(null);
      }, 15000);
      setTimeoutId(id);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);

  return (
    <section id='experiencias' className={`experiencias-section ${tema}`}>
      {tema === 'escuro' && <div className="stars" />} {/* Adiciona as estrelas no tema escuro */}
      <h2>Experiências Profissionais</h2>
      <div className="board-container">
        {textos.experiencias.map((experiencia, index) => (
          <motion.div
            key={index}
            className={`board-item ${expandedIndex === index ? 'active' : ''}`}
            onClick={() => toggleExperience(index)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <img src={experiencia.logo} alt={`${experiencia.empresa} logo`} className="experiencia-logo" />
            <h3>{experiencia.empresa}</h3>
            <p><strong>{experiencia.anoEntrada} - {experiencia.anoSaida}</strong></p>
            {expandedIndex === index && (
              <motion.div
                className="experiencia-descricao"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p>{experiencia.descricao}</p>
              </motion.div>
            )}
            <div className="click-indicator">
              {expandedIndex === index ? (
                <>➡️ Fechar</>
              ) : (
                <>➡️ Clique para mais informações</>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiencias;
