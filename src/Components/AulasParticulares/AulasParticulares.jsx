import React from 'react';
import './AulasParticulares.css';

const AulasParticulares = () => {
  return (
    <section id="aulasparticulares" className="aulas-container">
      <div className="aulas-content">
        <h2>Aulas Particulares</h2>
        <p className="aulas-descricao">
          Ofereço aulas particulares com uma abordagem simples e descomplicada. Primeira aula <strong>gratuita</strong> com duração de <strong>3 horas</strong>.
        </p>
        <ul className="aulas-beneficios">
          <li>Consultoria personalizada</li>
          <li>Montagem de portfólio inclusa</li>
          <li>Linguagem acessível e direta</li>
        </ul>
        <p className="superprof-info">
          <strong>Professora no Superprof:</strong> Confira meus <a href="https://www.superprof.com.br/aulas-programacao-para-front-end-back-end-voltada-para-pratica.html" target="_blank" rel="noopener noreferrer">feedbacks aqui</a>.
        </p>
      
        <a href="#contato" className="aulas-btn">Agende sua aula grátis</a>
      </div>
    </section>
  );
};

export default AulasParticulares;
