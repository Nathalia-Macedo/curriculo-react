import { useEffect } from 'react';

const AnuncioGoogle = ({ adClient, adSlot, adFormat = "auto", fullWidthResponsive = true }) => {
  useEffect(() => {
    // Verificar se o script adsbygoogle já foi carregado
    if (typeof window.adsbygoogle !== 'undefined' && window.adsbygoogle.length === 0) {
      // Se não houver elementos a serem empurrados, empurrar o anúncio
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.error("Falha ao carregar o anúncio Google: ", e);
      }
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}></ins>
  );
};

export default AnuncioGoogle;
