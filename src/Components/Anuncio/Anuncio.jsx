// AdComponent.js
import React from 'react';
import './Anuncio.css';

const AdComponent = ({ imageUrl, link }) => {
  return (
    <div className="ad-container">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt="Anúncio" />
      </a>
    </div>
  );
};

export default AdComponent;
