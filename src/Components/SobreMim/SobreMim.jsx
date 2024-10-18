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

E aí! Meu nome é Nath, tenho 22 anos, sou de Salvador Bahia e fui de vendedora ambulante a programadora e professora de programação Front End 🚀
<br/><br/>

💻 O que eu faço?<br/><br/>

Não sei ficar quieta! Crio conteúdo no instagram, também tenho conteúdos publicados na Hotmart, ministro workshops na Infinity School, sou professora particular de programação, e presto consultoria para iniciantes na área 🌟
<br/><br/>
❤️ Meu diferencial<br/><br/>

Nas minhas aulas vocês aprendem programação de forma leve, divertida, como uma conversa produtiva 💪📚
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
