import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from '../Pages/Home';
import Sabores from '../Pages/Sabores';
import Sobre from "../Pages/Sobre";

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Sabores" element={<Sabores/>}/>
                <Route path="/Sobre" element={<Sobre/>}/>
            </Routes>
        </BrowserRouter>
    )
}