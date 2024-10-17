import React, { useEffect, useRef, useMemo, useState } from 'react';
import { gsap } from 'gsap';
import { useCurriculo } from '../../../Context/Dados';
import './Contadores.css';

const Contadores = () => {
  const { textos } = useCurriculo();
  const contadorRefs = useRef([]);

  const contadorDados = useMemo(() => [
    { label: 'Anos de Experiência', valor: textos.contadorDados.anosDeExperiencia },
    { label: 'Projetos Completados', valor: textos.contadorDados.projetosCompletados },
    { label: 'Aulas Ministradas', valor: textos.contadorDados.aulasMinistradas },
    { label: 'Alunos Atendidos', valor: textos.contadorDados.alunosAtendidos },
    { label: 'Conteúdos Criados', valor: textos.contadorDados.conteudosCriados },
    { label: 'Workshops Realizados', valor: textos.contadorDados.workshopsRealizados },
    { label: 'Estudantes em Tutoria', valor: textos.contadorDados.estudantesEmTutoria },
    { label: 'Lives Realizadas', valor: textos.contadorDados.livesRealizadas }
  ], [textos]);

  // Estado para controlar a visualização dos contadores adicionais
  const [mostrarTodos, setMostrarTodos] = useState(false);
  
  // Estado para armazenar o tamanho da tela
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 768px como limite

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Atualiza o estado com o tamanho da tela
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Garante que `contadorRefs.current` sempre tenha o tamanho correto
    contadorRefs.current = contadorRefs.current.slice(0, contadorDados.length);

    // Aplica a animação de contagem para todos os elementos visíveis
    contadorRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.to(ref, {
          innerText: contadorDados[index].valor,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.inOut",
        });
      }
    });
  }, [contadorDados, mostrarTodos, isMobile]); // Adicione `mostrarTodos` e `isMobile` como dependências

  const contadoresParaExibir = mostrarTodos || !isMobile ? contadorDados : contadorDados.slice(0, 5);

  return (
    <div className="contador-container">
      {contadoresParaExibir.map((contador, index) => (
        <div className="contador-item" key={index}>
          <div
            ref={el => contadorRefs.current[index] = el}
            style={{ fontSize: '2rem', color: '#333' }}
          ></div>
          <p>{contador.label}</p>
        </div>
      ))}
      {/* Botão para mostrar mais contadores, apenas no mobile */}
      {isMobile && !mostrarTodos && contadorDados.length > 5 && (
        <button onClick={() => setMostrarTodos(true)} className="mostrar-mais-button">
          Mostrar Mais
        </button>
      )}
      {isMobile && mostrarTodos && (
        <button onClick={() => setMostrarTodos(false)} className="mostrar-menos-button">
          Mostrar Menos
        </button>
      )}
    </div>
  );
};

export default Contadores;
