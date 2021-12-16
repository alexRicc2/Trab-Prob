import React from "react";
import Navbar from "../common/Navbar";
import "./Header.scss";
import Button from "../common/Button";
import Footer from "../common/Footer";
export default function Header() {
  return (
    <section className="header">
      <Navbar h1={{ color: "#fff" }} sobre={{ color: "#fff" }} />
      <div className="header__content">
        <div className="header__content__text">
          <h2>
            Ferramenta simples e prática para análise e simulação de doenças
          </h2>
          <p>
            Simule e faça previsões do impacto que epidemias e o surgimento de
            novas doenças podem gerar.
          </p>
        </div>
        <div className="header__content__buttons">
          <Button to="/nova-analise">Nova análise</Button>
          <Button to="/doencas-salvas">Doenças salvas</Button>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
