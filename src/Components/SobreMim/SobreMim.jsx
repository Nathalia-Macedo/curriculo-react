import React from 'react';
import FotoEDescricao from './Me/FotoDescricao';
import eu from '../../Assets/eu linda.jpg';
import Timeline from './Timeline/Timeline';
import Contadores from './Contadores/Contadores';
import Skills from './Skills/Skills';
const SobreMim = () => {
    return (
        <div className="sobre-mim-container">
            <FotoEDescricao 
                fotoSrc={eu} 
                nome="Nathalia Macedo" 
                descricao={
                    <>
                        ✨ Quem sou eu?<br/><br/>

E aí! Sou Nathalia, uma apaixonada pela programação e uma criadora de conteúdo que adora compartilhar tudo sobre tecnologia! 🚀
<br/><br/>

💻 O que eu faço?<br/><br/>

Estou sempre ativa: criando conteúdo no meu Instagram, trabalhando na Hotmart e ministrando workshops na Infinity School. Amo ajudar a galera a se aventurar nesse mundo incrível da programação! 🌟
<br/><br/>
❤️ Minhas paixões<br/><br/>

Quando não estou codificando, você pode me encontrar na academia, buscando sempre crescer e aprender mais! 💪📚
                    </>
                }
            />

            <Timeline/>
            <Contadores/>
            <Skills/>
            {/* Outras seções do 'Sobre Mim' podem ser adicionadas aqui */}
        </div>
    );
};

export default SobreMim;
