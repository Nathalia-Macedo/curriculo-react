// FotoEDescricao.js
import React from 'react';
import './FotoDescricao.css';

const FotoEDescricao = ({ fotoSrc, nome, descricao }) => {
    return (
        <div className="foto-descricao-container">
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
