import React from 'react';
import './FotoDescricao.css';
import { useCurriculo } from '../../../Context/Dados'; // Importa o contexto para o tema

const FotoEDescricao = ({ fotoSrc, nome, descricao }) => {
    const { tema } = useCurriculo(); // Pega o tema do contexto

    return (
        <div className={`foto-descricao-container ${tema}`}>
            <div className="foto-container">
                <img src={fotoSrc} alt={nome} className="foto" />
            </div>
            <div className="descricao">
                <h2>{nome}</h2>
                <p>{descricao}</p>
            </div>
        </div>
    );
};

export default FotoEDescricao;
