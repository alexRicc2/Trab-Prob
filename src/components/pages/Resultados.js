import React, {useContext, useState} from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Card from "../common/Card";
import Button from "../common/Button";
import "./Resultados.scss";
import { DoencaContext } from "../common/Doenca";
import Contagio from "../common/Charts/Contagio";
import FamiliaBinomial from "../common/Charts/FamiliaBinomial";
import Poisson from "../common/Charts/Poisson";
import { useNavigate } from "react-router-dom";
export default function Resultados(props) {

  const { formState } = useContext(DoencaContext);
  const [grafico, setGrafico] = useState('poisson')
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log('deletando')
    const doencas = JSON.parse(localStorage.getItem('doencas')) || []

    const doencasDeletado = doencas.filter(doenca => doenca.nome !== formState.nome)

    localStorage.setItem('doencas', JSON.stringify(doencasDeletado))
    navigate('/')
    
  }
  return (
    <>
      <Navbar className="navbar-resultados"></Navbar>
      <div className="resultados">
        <h3>Resultados</h3>
        <h1 className="resultados__nome">{formState?.nome}</h1>
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
            <h1>{formState?.taxa}%</h1>
          </Card>
          <Card className="resultados__cards__card">
            <h2>Dias infectado</h2>
            <h1>{formState?.tempoAgeVetor}</h1>
          </Card>
          <Card className="resultados__cards__card">
            <h2>Mortalidade</h2>
            <h1>{formState?.mortalidade}%</h1>
          </Card>
        </div>
        <Button className="resultados__editar" to="/nova-analise/edit">Editar dados</Button>
        <select className="resultados__select"
        onChange={(e)=>{
          setGrafico(e.target.value)
        }}
        >
          <option value="progressao">Progressão da Doença</option>
          <option value="sala fechada">
            Sala fechada
          </option>
          <option value="poisson">
            Poisson mortes
          </option>
        </select>
        {grafico === 'progressao' &&
          <Contagio/>
        }
        {
          grafico === 'sala fechada' &&
          <FamiliaBinomial/>
        }
        {
          grafico === 'poisson' &&
          <Poisson/>
        }
        
        <div className="resultados__buttons">
          <Button to="/nova-analise/create">Nova análise</Button>
          <Button type="delete" onClick={handleDelete}>Deletar doença</Button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
