import React, { useState } from 'react';
import { useCurriculo } from '../../Context/Dados';
import './Formacao.css';

const Formacao = () => {
  const { textos } = useCurriculo(); // Pega os dados do contexto
  const tema = textos.tema; // Obtém o tema
  const [expandedIndex, setExpandedIndex] = useState(null); // Estado para controle de item expandido

  const toggleItem = (index) => {
    // Se o item clicado for o que já está expandido, fecha-o; senão, expande o novo
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id='formacao' className={`formacao-section ${tema}`}>
      <h2 id="titleformacao">Formação Acadêmica</h2>
      <ul className="formacao-list">
        {textos.formacaoData.map((curso, index) => (
          <li 
            key={index} 
            className={`formacao-item ${tema}`} 
            onClick={() => toggleItem(index)} // Adiciona o evento de clique
          >
            <h3>{curso.nomeCurso}</h3>
            <p><strong>Instituição:</strong> {curso.instituicao}</p>
            <p><strong>Duração:</strong> {curso.duracao}</p>
            {expandedIndex === index && ( // Renderiza a descrição apenas para o item ativo
              <p>{curso.descricao}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Formacao;
