import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Card from "../common/Card";
import Button from "../common/Button";
import "./Resultados.scss";
export default function Resultados(props) {
  return (
    <>
      <Navbar className="navbar-resultados"></Navbar>
      <div className="resultados">
        <h3>Resultados</h3>
        <h1 className="resultados__nome">Faminiase</h1>
        <div className="resultados__cards">
          <Card className="resultados__cards__card infectados">
            <h2>Infectados</h2>
            <h1>40.000</h1>
          </Card>
          <Card className="resultados__cards__card obitos">
            <h2>Óbitos</h2>
            <h1>40.000</h1>
          </Card>
          <Card className="resultados__cards__card">
            <h2>Taxa de transmissão</h2>
            <h1>2%</h1>
          </Card>
          <Card className="resultados__cards__card">
            <h2>Dias infectado</h2>
            <h1>15</h1>
          </Card>
          <Card className="resultados__cards__card">
            <h2>Mortalidade</h2>
            <h1>15%</h1>
          </Card>
        </div>
        <Button className="resultados__editar">Editar dados</Button>
        <select className="resultados__select">
          <option value="valor1">Progressão da Doença</option>
        </select>
        <div className="resultados__grafico"></div>
        <div className="resultados__novos-dados">
          <h1>Novos dados</h1>
          <form>
            <div>
              <label htmlFor="nome">Nome</label>
              <input id="nome"></input>
            </div>
            <div>
              <label htmlFor="dados">Dados</label>
              <input id="dados"></input>
            </div>
            <Button type="submit">Concluído</Button>
          </form>
        </div>
        <div className="resultados__buttons">
          <Button>Nova análise</Button>
          <Button>Deletar doença</Button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
