import React from "react";
import { Link } from "react-router-dom";
import '../Header/style.css'


export default function Header(){
    return(
        <header>
            <div className="box-topo limitar-secao">
                <img className="logo" src="/assets/logo.png" alt="Logo"/>
                <nav className="navibar">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/Sabores">Sabores</Link>
                    <Link className="link" to="/Sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}