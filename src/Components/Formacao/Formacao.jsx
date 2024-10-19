import React from 'react';
import { useCurriculo } from '../../Context/Dados';
import './Formacao.css'
const Formacao = () => {
  const { textos } = useCurriculo(); // Pega os dados do contexto

  return (
    <section>
      <h2>Formação Acadêmica</h2>
      <ul>
        {textos.formacaoData.map((curso, index) => (
          <li key={index}>
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
