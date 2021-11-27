import React,{useState} from 'react';

export function Fform({onSubmit}){

  const [ familia, setFamilia] = useState(10);
  const [ populacao, setPopulacao] = useState(100000);
  const [ contaminados, setContaminados] = useState(10);
  const [ R, setR] = useState(2);
  const [ T, setT] = useState(2);

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
  const handleR = e => {
    const numero = Number(e.target.value)
    setR(numero)
  }
  
  const handleT = e =>{
    const numero = Number(e.target.value)
    setT(numero)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(R,T,contaminados,populacao,familia)
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="populacao" >População</label>
      <input id="populacao" type="number" onChange={handlePopulacao} value={populacao}/>
      <label htmlFor="contaminados">Contaminados</label>
      <input id="contaminados" type="number" onChange={handleContaminados} value={contaminados}/>
      <label htmlFor="r">R</label>
      <input id="r" type="text" onChange={handleR} value={R}/>
      <label htmlFor="familia">Tamanho da familia</label>
      <input id="familia" type="number" onChange={handleFamilia} value={familia}/>
      <label htmlFor="tempo">Tempo</label>
      <input id="tempo" type="number" onChange={handleT} value={T}/>
      <button type="submit">submit</button>
    </form>
  )
}