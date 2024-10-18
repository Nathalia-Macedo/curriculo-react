import React from 'react';
import './Galery.css'; // Importando o CSS da galeria

// Função para importar automaticamente todas as imagens da pasta
function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../Assets/images', false, /\.(png|jpe?g|svg)$/)); // Mude o caminho para a pasta onde estão suas imagens

const Gallery = () => {
  return (
    <div className="gallery-container">
      {/* Texto de agradecimento */}
      <div className="thank-you-message">
        <h1>Minha Trajetória</h1>
        <p>Gostaria de agradecer a todos os meus alunos, amigos e familiares que fizeram parte da minha jornada até aqui. Cada um de vocês é parte essencial dessa caminhada. Muito obrigado!</p>
      </div>

      {/* Galeria de Imagens */}
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
