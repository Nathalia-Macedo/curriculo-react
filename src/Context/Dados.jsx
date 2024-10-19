import React, { createContext, useState, useContext, useEffect } from 'react';
import HTML from '../Assets/HTML.png';
import CSS from '../Assets/CSS.png';
import REACT from '../Assets/React.png';
import JS from '../Assets/JS.png';
import NODE from '../Assets/NODE.png';
import TS from '../Assets/Typescript.svg.png';
import NEXT from '../Assets/next.png';
import SELENIUM from '../Assets/selenium.png';
import GIT from '../Assets/git.png';
import GITHUB from '../Assets/GITHUB.png';
import PYTHON from '../Assets/Py.png';


// Criar o contexto
const CurriculoContext = createContext();

// Provedor do contexto
export const CurriculoProvider = ({ children }) => {
  const [textos, setTextos] = useState({
    nome: "Nathalia de Macedo Martins",
    profissao: "Professora e Programadora Front End",
    descricao: "Meu nome é Nathalia, tenho 22 anos, e fui de vendedora ambulante a programadora!",
    projetos: [
      { id: 1, nome_do_projeto: "Choco-Bytes", descricao_do_projeto: "A CHocoBytes foi desenvolvida em um workshop ministrado por mim na Infinity School. É uma simulação de loja de doces, com catálogo, favoritos, carrinho, todas as informações sendo guardadas no LocalStorage!", link_do_projeto: "https://choco-bytes.vercel.app/" },
      { id: 2, nome_do_projeto: "Gerador de QR Code", descricao_do_projeto: "Foi um dos primeiros projetos que fiz, apenas com o front. Basta adicionar o link e ele gera o QR code instantaneamente", link_do_projeto: "https://qrcode-nath.vercel.app/" },
      { id: 3, nome_do_projeto: "Compilador Javascript Online", descricao_do_projeto: "Idealizado para um workshop da Infinity School, cada aluno desenvolveu seu próprio compilador Javascript, responsivo e funcional!", link_do_projeto: "https://meu-compilador.vercel.app/" }
      ,{ id: 4, nome_do_projeto: "App Gerador de Senhas", descricao_do_projeto: "Esse foi meu primeiro projeto com React Native, um app gerador de senhas aleatórias que usa o Async Storage para guardar as informações!", link_do_projeto: "https://github.com/Nathalia-Macedo/App-Gerador-de-Senhas" },
      { id: 5, nome_do_projeto: "Site de Rock", descricao_do_projeto: "Site criado em workshop ministrado na Infinity School, no mês do rock", link_do_projeto: "https://rocksessions.vercel.app/" },
      { id: 6, nome_do_projeto: "Site Básico ensinando programação", descricao_do_projeto: "Minha fantasia de Halloween do ano passado me custou 25 reais, eu imprimi uma plaquinha plastificada escrito 404 not found, fantasia não encontrada! Divulguei meu instagram e um joguinho básico ensinando programação", link_do_projeto: "https://programming-nath.vercel.app/" }
    ],
    experiencias: [
      {
        empresa: 'Infinity School',
        anoEntrada: 'Janeiro/2023',
        anoSaida: 'Agosto/2023',
        descricao: 'Ministrar aulas particulares, lives, workshops, aulas de reposição, correção de provas, organização e manutenção das salas de aulas, além de acompanhar o professor, auxiliando com as dúvidas dos alunos',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCT8NHZ0-WSLxWmcFx_i0Kz8ai4aN5AQiwIQ&s'
      }, {
        empresa: 'TOTVS',
        anoEntrada: 'Agosto/2023',
        anoSaida: 'Abril/2024',
        descricao: 'Atuação como estagiária front end, desenvolvendo layout dos sistemas',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1879px-Burger_King_2020.svg.png'
      },{
        empresa: 'Infinity School',
        anoEntrada: 'Dezembro/2023',
        anoSaida: 'Emprego Atual',
        descricao: 'Atuação como professora front End na Infinity School, ministrando workshops, aulas regulares e supermódulos!',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1879px-Burger_King_2020.svg.png'
      },{
        empresa: 'Programadora Front End',
        anoEntrada: '2022',
        anoSaida: 'Emprego Atual',
        descricao: 'Atuação como desenvolvedora Front End',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1879px-Burger_King_2020.svg.png'
      }
    ],
    timelineEventos: [
      {
        year: '2022',
        title: 'Conhecendo a Infinity School',
        description: 'Fiz uma visita a Infinity School e me apaixonei pela estrutura do local, fora os benefícios que me permitiam iniciar meus estudos na área que sempre quis! Meu curso começou outubro de 2022',
      },
      {
        year: '2023',
        title: 'Monitoria na Infinity School',
        description: '16 de janeiro de 2023, comecei como monitora na Infinity, foi um dos dias mais felizes da minha vida!',
      },
      {
        year: '2023',
        title: 'Professora Particular de programação',
        description: 'Durante o processo de monitoria, comecei a ministrar aulas particulares também!',
      },
      {
        year: '2024',
        title: 'Workshops na Infinity School',
        description: 'Iniciei minha jornada como monitora, ministrando workshops sobre programação, fazendo muito networking.',
      },
      {
        year: '2024',
        title: 'Criação de Conteúdo',
        description: 'Comecei recentemente a desenvolver conteúdo no Instagram e na Hotmart!',
      },
      ],
       formacaoData : [
      {
        nomeCurso: "Análise e Desenvolvimento de Sistemas",
        instituicao: "Faculdade Estácio de Sá",
        duracao: "2022 - 2025",
        descricao: "Curso focado em capacitar os alunos a projetar, desenvolver e implementar soluções tecnológicas para atender às necessidades de empresas e usuários",
      },
      {
        nomeCurso: " Programação Full Stack",
        instituicao: "Infinity School",
        duracao: "2022 - 2023",
        descricao: "Formação prática em programação, banco de dados e desenvolvimento web.",
      },
      {
        nomeCurso: "Curso de Fundamentos de ITIL",
        instituicao: "Fundação Bradesco",
        duracao: "2023",
        descricao: "O curso de Fundamentos de ITIL apresenta os princípios essenciais do gerenciamento de serviços de TI, focando nas melhores práticas para a entrega eficaz e eficiente de serviços",
      },
      {
        nomeCurso: "Curso de Fundamentos de COBIT",
        instituicao: "Fundação Bradesco",
        duracao: "2023",
        descricao: "O curso de Fundamentos de COBIT aborda os princípios e práticas do framework COBIT, destacando a importância da governança e gerenciamento de TI",
      },
      {
        nomeCurso: "Lei Geral de Proteção de Dados no TOTVS Fluig Plataforma",
        instituicao: "TOTVS Fluig",
        duracao: "2023",
        descricao: "O curso de LGPD aborda os princípios e requisitos da Lei Geral de Proteção de Dados, capacitando os participantes a implementar práticas de conformidade eficazes. Utilizando a plataforma TOTVS Fluig, os alunos exploram como gerenciar e proteger dados pessoais, além de entender os direitos dos titulares.",
      }
    ],
    
    contadorDados: {
      anosDeExperiencia: 3,
      projetosCompletados: 20,
      aulasMinistradas: 50,
      alunosAtendidos: 100,
      conteudosCriados: 200,
      workshopsRealizados: 70,
      interacoesRedesSociais: 500,
      estudantesEmTutoria: 15,
      livesRealizadas: 50,
    },
    skillsData: [
      { id: 1, skill: "JavaScript", nivel: "Avançado", image: JS },
      { id: 2, skill: "React", nivel: "Avançado", image: REACT },
      { id: 3, skill: "CSS", nivel: "Intermediário", image: CSS },
      { id: 4, skill: "HTML", nivel: "Avançado", image: HTML },
      { id: 5, skill: "Node.js", nivel: "Intermediário", image: NODE },
      { id: 6, skill: "Typescript", nivel: "Intermediário", image: TS },
      { id: 7, skill: "Next JS", nivel: "Intermediário", image: NEXT },
      { id: 8, skill: "Selenium", nivel: "Intermediário", image: SELENIUM },
      { id: 9, skill: "GIT", nivel: "Intermediário", image: GIT },
      { id: 10, skill: "GitHub", nivel: "Intermediário", image: GITHUB },
      { id: 11, skill: "Python", nivel: "Intermediário", image: PYTHON },
    ],
    tema: 'claro' // Adicionando a variável tema aqui
  });

  // Função para alternar o tema entre claro e escuro
  const alternarTema = () => {
    const novoTema = textos.tema === 'claro' ? 'escuro' : 'claro';
    setTextos(prev => ({
      ...prev,
      tema: novoTema
    }));
    localStorage.setItem('tema', novoTema); // Salva a preferência no localStorage
  };

  // Efeito para aplicar o tema ao document root
  useEffect(() => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
      setTextos(prev => ({
        ...prev,
        tema: temaSalvo
      }));
    }
    document.documentElement.setAttribute('data-tema', textos.tema); // Define o atributo no HTML
  }, [textos.tema]);

  function gerarId(lista) {
    if (lista.length === 0) return 1;
    return lista[lista.length - 1].id + 1;
  }

  function adicionarProjeto(novoProjeto) {
    setTextos(prev => ({
      ...prev,
      projetos: [...prev.projetos, { id: gerarId(prev.projetos), ...novoProjeto }]
    }));
  }

  function atualizarTexto(campo, valor) {
    setTextos(prev => ({
      ...prev,
      [campo]: valor
    }));
  }

  function removerProjeto(id) {
    setTextos(prev => ({
      ...prev,
      projetos: prev.projetos.filter(projeto => projeto.id !== id)
    }));
  }

  function adicionarExperiencia(novaExperiencia) {
    setTextos(prev => ({
      ...prev,
      experiencias: [...prev.experiencias, novaExperiencia]
    }));
  }

  function removerExperiencia(empresa) {
    setTextos(prev => ({
      ...prev,
      experiencias: prev.experiencias.filter(exp => exp.empresa !== empresa)
    }));
  }

  function atualizarContador(campo, valor) {
    setTextos(prev => ({
      ...prev,
      contadorDados: {
        ...prev.contadorDados,
        [campo]: valor
      }
    }));
  }

  // Funções para manipular o skillsData
  function adicionarSkill(novaSkill) {
    setTextos(prev => ({
      ...prev,
      skillsData: [...prev.skillsData, { id: gerarId(prev.skillsData), ...novaSkill }]
    }));
  }

  function removerSkill(id) {
    setTextos(prev => ({
      ...prev,
      skillsData: prev.skillsData.filter(skill => skill.id !== id)
    }));
  }

  function atualizarSkill(id, skillAtualizada) {
    setTextos(prev => ({
      ...prev,
      skillsData: prev.skillsData.map(skill =>
        skill.id === id ? { ...skill, ...skillAtualizada } : skill
      )
    }));
  }

  return (
    <CurriculoContext.Provider value={{
      textos,
      setTextos,
      adicionarProjeto,
      atualizarTexto,
      removerProjeto,
      adicionarExperiencia,
      removerExperiencia,
      atualizarContador,
      adicionarSkill,
      removerSkill,
      atualizarSkill,
      tema: textos.tema, // Expondo o tema aqui
      alternarTema
    }}>
      {children}
    </CurriculoContext.Provider>
  );
};

// Hook para usar o contexto
export const useCurriculo = () => {
  return useContext(CurriculoContext);
};
