import React from "react";
import Header from "./components/pages/Header";
import NovaAnalise from "./components/pages/NovaAnalise";
import Sobre from "./components/pages/Sobre";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoencasSalvas from "./components/pages/DoencasSalvas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/nova-analise" element={<NovaAnalise />} />
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/doencas-salvas" element={<DoencasSalvas/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
