import React from "react";

import '../Sobre/style.css';

import Header from '../../Comp/Header/index.js';
import Footer from '../../Comp/Footer/index.js';


export default function Sobre() {
    return(
        <div>
            <Header/>

                <main>
                    <section className="secao-banner-sobre">
                        <div className="box-titulo-banner">
                            <h1>A GELATERIA</h1>
                        </div>
                    </section>

                    <section className="section-sobre limitar-secao">
                        <div className="titulo-sobre">
                            <h2>Sobre Nós</h2>
                            <h3>Nós simplesmente amamos sorvete!</h3>
                        </div>
                        <div className="paragrafo-sobre">
                            <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios.
                             Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                            <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. 
                            Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                        </div>
                    </section>

                    <section className="secao-image-sobre">
                        <div>
                            <img src="/assets/sobre-image.jpg" alt="Sobre"/>
                            
                            
                            <img src="/assets/sorveteria.jpg" alt="Sorveteria"/>
                        </div>
                    </section>
                </main>
            <Footer/>
        </div>
    )
}