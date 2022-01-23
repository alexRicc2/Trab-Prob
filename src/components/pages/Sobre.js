import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import "./Sobre.scss";

export default function Sobre() {
  return (
    <section className="secaoSobre">
      <Navbar />
      <div className="secaoSobre__content">
        <h1 className="page">Plague Chart</h1>
        <p className="title">
          A ferramenta que permite que você analise doenças de forma simples e
          rápida.
        </p>
        <p className="text">
          Esse projeto foi desenvolvido por alunos da UNESP campus São José do
          Rio Preto para a disciplina de Probabilidade e estatística no ano de
          2021. Ele tem como objetivo oferecer uma aplicação web simples e
          acessível para a análise e simulação dos impactos que doenças podem
          ter em uma população.
        </p>
      </div>
      <Footer />
    </section>
  );
}
