import React, { createContext, useState, useContext } from 'react';

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
    ],
    experiencias: [
      {
        empresa: 'Brasilgás',
        anoEntrada: '2020',
        anoSaida: '2021',
        descricao: 'Registro de contas a pagar, atendimento ao cliente, lançamento de notas fiscais!',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCT8NHZ0-WSLxWmcFx_i0Kz8ai4aN5AQiwIQ&s' // Substitua pela URL da imagem da empresa
      }, {
        empresa: 'Burger King',
        anoEntrada: '2021',
        anoSaida: '2021',
        descricao: 'Preparo de hamburgueres e batatas, limpeza do local, organização das mesas e atendimento ao cliente',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/1879px-Burger_King_2020.svg.png' // Substitua pela URL da imagem da empresa
      },
      // Adicione mais experiências conforme necessário
    ],
    timelineEventos: [ // Adicionando o estado da linha do tempo
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
      },{
        year: '2024',
        title: 'Criação de Conteúdo',
        description: 'Comecei recentemente a desenvolver conteúdo no Instagram e na Hotmart!',
      },
    ],
  });

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

  return (
    <CurriculoContext.Provider value={{ textos, setTextos, adicionarProjeto, atualizarTexto, removerProjeto, adicionarExperiencia, removerExperiencia }}>
      {children}
    </CurriculoContext.Provider>
  );
};

// Hook para usar o contexto
export const useCurriculo = () => {
  return useContext(CurriculoContext);
};
