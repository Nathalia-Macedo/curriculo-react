import React from 'react';
import './NavBar.css'; 

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Administração</h2>
            <ul>
                <li><a href="#experiencias">Experiências</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#sobre">Sobre Mim</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#testemunhos">Testemunhos</a></li>
                <li><a href="#configuracoes">Configurações Gerais</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
