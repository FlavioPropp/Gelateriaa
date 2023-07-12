import React from "react";
import '../Footer/style.css';
export default function Footer(){
    return(
        <footer>
        <div className="secao-footer ">
            <div>
                <img src="/assets/logo.png" alt="Logo"/>
            </div>

            <div className="texto">
                <h2>ENDEREÇO</h2>
                <p>Av. Bernardino de Campos, 98</p><p> São Paulo, SP 12345-678</p>
            </div>

            <div className="texto">
                <h2>CONTATO</h2>
                <p>info@meusite.com</p><a href="tel: +55113456-7890">Tel: (11) 3456-7890</a>
            </div>

            <div className="texto">
                <h2>HORÁRIOS</h2>
                <p>ABERTO TODOS OS DIAS</p><p>10:00 - 22:00</p>
            </div>
        </div>
            <div className="credito">
                <p>Gelateria. Orgulhosamente desenvolvido por "Flávio Propp"</p>
            </div>
        
        </footer>
    )
}