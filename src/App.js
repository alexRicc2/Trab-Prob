import React from "react";
import Header from "./components/pages/Header";
import NovaAnalise from "./components/pages/NovaAnalise";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/nova-analise" element={<NovaAnalise />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
