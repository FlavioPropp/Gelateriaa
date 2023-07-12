import React from "react";

import Header from "../../Comp/Header";
import Footer from "../../Comp/Footer";

import '../Sabores/estilo.css';

export default function Sabores() {
    return(
    <div>
        <div>
            <Header/>
        </div>

            <main>
                <section className="secao-banner-sabores">
                    <div className="titulo-banner-sabores">
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>

                

                <section className="limitar-secao sabores">
                <h2>Sabores de Sorvete</h2>
                    <div className="Box-sabores">
                    <div className="card-sabor">
                        <img src="/assets/sabor-oreo.png" alt="Sabor-Oreo"/>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className="card-sabor">
                        <img src="/assets/sabor-pistache.png" alt="Sabor-Pistache"/>
                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente</p>
                    </div>
                    <div className="card-sabor">
                        <img src="/assets/sabor-cookies-avela.png" alt="Sabor-Cookies-avela"/>
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className="card-sabor">
                        <img src="/assets/sorbet-kiwi.png" alt="Sabor-Kiwi"/>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sovete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className="card-sabor">
                        <img src="/assets/sorbet-morango.png" alt="Sabor-morango"/>
                        <h3>Sorvete de morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className="card-sabor">
                        <img src="/assets/sorbet-limao.png" alt="Sabor-Limao"/>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar</p>
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