import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { useCurriculo } from '../../../Context/Dados';
import './Contadores.css'
const Contadores = () => {
  const { textos } = useCurriculo(); // Pega os dados do contexto
  const contadorRefs = useRef([]);

  // Use useMemo para memorizar contadorDados
  const contadorDados = useMemo(() => [
    { label: 'Anos de Experiência', valor: textos.contadorDados.anosDeExperiencia },
    { label: 'Projetos Completados', valor: textos.contadorDados.projetosCompletados },
    { label: 'Aulas Ministradas', valor: textos.contadorDados.aulasMinistradas },
    { label: 'Alunos Atendidos', valor: textos.contadorDados.alunosAtendidos },
    { label: 'Horas de Aula Ministradas', valor: textos.contadorDados.horasDeAulaMinistradas },
    { label: 'Conteúdos Criados', valor: textos.contadorDados.conteudosCriados },
    { label: 'Workshops Realizados', valor: textos.contadorDados.workshopsRealizados },
    { label: 'Interações nas Redes Sociais', valor: textos.contadorDados.interacoesRedesSociais },
    { label: 'Estudantes em Tutoria', valor: textos.contadorDados.estudantesEmTutoria },
    { label: 'Lives Realizadas', valor: textos.contadorDados.livesRealizadas },
  ], [textos]); // Dependência para recalcular quando textos mudar

  useEffect(() => {
    contadorRefs.current.forEach((ref, index) => {
      // Animação de contagem usando GSAP
      gsap.to(ref, {
        innerText: contadorDados[index].valor,
        duration: 2,
        snap: { innerText: 1 },
        ease: "power1.inOut",
      });
    });
  }, [contadorDados]); // Dependência alterada para usar o memoized contadorDados

  return (
    <div className="contador-container">
      {contadorDados.map((contador, index) => (
        <div className="contador-item" key={index}>
          <div ref={el => contadorRefs.current[index] = el} style={{ fontSize: '2rem', color: '#333' }}></div>
          <p>{contador.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Contadores;
