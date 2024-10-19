import React from 'react';
import { useCurriculo } from '../../Context/Dados';
import './Formacao.css';

const Formacao = () => {
  const { textos } = useCurriculo(); // Pega os dados do contexto

  return (
    <section id='formacao' className="formacao-section">
      <h2 id="titleformacao">Formação Acadêmica</h2>
      <ul className="formacao-list">
        {textos.formacaoData.map((curso, index) => (
          <li key={index} className="formacao-item">
            <h3>{curso.nomeCurso}</h3>
            <p><strong>Instituição:</strong> {curso.instituicao}</p>
            <p><strong>Duração:</strong> {curso.duracao}</p>
            <p>{curso.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Formacao;