import React from "react";

import Header from "../../Comp/Header";
import Footer from "../../Comp/Footer";

import '../Home/style.css';

export default function Home(){
    return(
        <div>
        <div>
            <Header/>
        </div>

                <main>
                    <section className="secao-banner">
                        <div className="titulo-banner">
                            <h1>SORVETE ARTESANAL</h1>
                        </div>
                    </section>

                    <section className="secao-sabores">
                        <div>
                            <img src="/assets/banner-sabores.jpg" alt="Banner-Sabores"/>
                        </div>
                    <div className="texto-secao">
                        <div>
                            <h2>NOSSOS SABORES</h2>
                            <h3>Novos e deliciosos!</h3>
                        </div>
                        <div className="p-sabores">
                            <p>
                            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais,
                             à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber
                              que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                            </p>
                        </div>
                    </div>
                        
                    </section>

                    <section className="secao-eventos">
                    <div className="texto-secao">
                        <div>
                            <h2>NOSSOS EVENTOS</h2>
                            <h3>Delicias com sorvete</h3>
                        </div>

                        <div>
                            <p>
                            Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender 
                            e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                            </p>
                        </div>
                    </div>
                        <div>
                            <img src="/assets/eventos-image.jpg" alt="Imagem eventos"/>
                        </div>
                    
                    </section>

                    <section className="secao-sobre">
                        <div>
                            <img src="/assets/sobre-image.jpg" alt="Sobre"/>
                        </div>
                    <div className="texto-secao">
                        <div>
                            <h2>SOBRE NÓS</h2>
                            <h3>Alegria em cada casquinha!</h3>
                        </div>

                        <div>
                            <p>
                            Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 
                            nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                            </p>
                        </div>
                    </div>
                    </section>
                </main>
        <div>
            <Footer/>
        </div>
        </div>
    )
}