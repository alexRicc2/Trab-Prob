import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Button from "../common/Button";
import "./NovaAnalise.scss";
export default function NovaAnalise() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("submitado");
  };

  return (
    <section className="nova-analise">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="nova-analise__big-input">
          <label htmlFor="nome">Nome da doença: </label>
          <input id="nome"></input>
        </div>
        <div className="nova-analise__inputs">
          <div>
            <label htmFor="tempo">Tempo que age como vetor</label>
            <input id="tempo"></input>
          </div>
          <div>
            <label htmFor="taxa">Taxa de transmissão</label>
            <input id="taxa"></input>
          </div>
          <div>
            <label htmFor="mortalidade">Mortalidade</label>
            <input id="mortalidade"></input>
          </div>
          <div>
            <label htmFor="tempo-vetor">
              Tempo para se tornar vetor após infecção
            </label>
            <input id="tempo-vetor"></input>
          </div>
        </div>
        <Button type="submit">Concluído</Button>
      </form>
      <Footer />
    </section>
  );
}
