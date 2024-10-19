import React from 'react';
import './Galery.css';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../Assets/images', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="thank-you-message">
        <h1>Minha Trajetória</h1>
        <p>Gostaria de agradecer a todos os meus alunos, amigos e familiares que fizeram parte da minha jornada até aqui. Cada um de vocês é parte essencial dessa caminhada. Muito obrigado!</p>
      </div>

      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`gallery-img-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
