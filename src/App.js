import React from "react";
import Header from "./components/pages/Header";
import NovaAnalise from "./components/pages/NovaAnalise";
import Sobre from "./components/pages/Sobre";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoencasSalvas from "./components/pages/DoencasSalvas";
import { DoencaProvider } from "./components/common/Doenca";
import Estatisticas from "./components/pages/Estatisticas";
import Resultados from "./components/pages/Resultados";
function App() {
  return (
    <BrowserRouter>
      <DoencaProvider>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/nova-analise" element={<NovaAnalise />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/doencas-salvas" element={<DoencasSalvas />} />
          <Route path="/estatisticas" element={<Estatisticas/>} />
          <Route path="/resultados" element={<Resultados/>}/>
        </Routes>
      </DoencaProvider>
    </BrowserRouter>
  );
}

export default App;
