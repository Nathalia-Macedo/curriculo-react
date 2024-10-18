import React, { useState, useEffect } from 'react';
import './Galery.css';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../Assets/images', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const [fadeIn, setFadeIn] = useState(false);

  const handleLoadMore = () => {
    setFadeIn(false);
    setVisibleImages((prev) => prev + 6);
  };

  useEffect(() => {
    if (visibleImages < images.length) {
      setFadeIn(true);
    }
  }, [visibleImages]);

  return (
    <div className="gallery-container">
      <div className="thank-you-message">
        <h1>Minha Trajetória</h1>
        <p>Gostaria de agradecer a todos os meus alunos, amigos e familiares que fizeram parte da minha jornada até aqui. Cada um de vocês é parte essencial dessa caminhada. Muito obrigado!</p>
      </div>
      <div className="gallery">
        {images.slice(0, visibleImages).map((image, index) => (
          <div className={`gallery-item ${fadeIn ? 'fade-in' : ''}`} key={index}>
            <img src={image} alt={`gallery-img-${index}`} />
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Ver mais
        </button>
      )}
    </div>
  );
};

export default Gallery;
