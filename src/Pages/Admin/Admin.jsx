import React, { useState } from 'react';
import Sidebar from '../../Components/NavBarAdmin/NavBar';
import './Admin.css';

// Componentes para cada seção
const Experiences = () => <div>Experiências</div>;
const Projects = () => <div>Projetos</div>;
const Contact = () => <div>Contato</div>;

const Admin = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [activeSection, setActiveSection] = useState('experiences'); // Seção ativa

    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
    };

    // Função para mudar a seção ativa
    const changeSection = (section) => {
        setActiveSection(section);
    };

    const renderContent = () => {
        switch (activeSection) {
            case 'experiences':
                return <Experiences />;
            case 'projects':
                return <Projects />;
            case 'contact':
                return <Contact />;
            default:
                return <Experiences />;
        }
    };

    return (
        <div className="admin-container">
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isSidebarActive ? 'Fechar Menu' : 'Abrir Menu'}
            </button>
            <Sidebar 
                className={isSidebarActive ? 'active' : ''} 
                changeSection={changeSection} // Passando a função para a sidebar
            />
            <div className="main-content">
                <h1>Painel de Administração</h1>
                {renderContent()} {/* Renderizando o conteúdo da seção ativa */}
            </div>
        </div>
    );
};

export default Admin;
