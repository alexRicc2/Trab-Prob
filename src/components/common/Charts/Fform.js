import React,{useState, useContext} from 'react';
import { DoencaContext } from "../Doenca";
import Button from '../Button';

export function Fform({onSubmit}){

  const [ familia, setFamilia] = useState(10);
  const [ populacao, setPopulacao] = useState(10000);
  const [ contaminados, setContaminados] = useState(1000);
  const {formState} = useContext(DoencaContext);
  const handlePopulacao = e =>{
    const numero = Number(e.target.value)
    setPopulacao(numero)
    console.log(populacao)
  }
  
  const handleFamilia = e =>{
    const numero = Number(e.target.value)
    setFamilia(numero)
  }
  
  const handleContaminados = e =>{
    const numero = Number(e.target.value)
    setContaminados(numero)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formState.taxa,contaminados,populacao,familia)
  }


  return (
    <div className='resultados__novos-dados'>
    <h1>Novos dados</h1>
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="populacao" >População</label>
      <input id="populacao" type="number" onChange={handlePopulacao} value={populacao}/>
      
      <label htmlFor="contaminados">Contaminados</label>
      <input id="contaminados" type="number" onChange={handleContaminados} value={contaminados}/>
      </div>
      <div>
      <label htmlFor="familia">Tamanho da familia</label>
      <input id="familia" type="number" onChange={handleFamilia} value={familia}/>
      </div>
      <Button type="submit">submit</Button>
    </form>
    </div>
  )

}