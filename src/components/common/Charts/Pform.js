import React,{useState} from "react";
import Button from "../Button";
import Label from '../InfoLabel';

export function Pform(props) {

  
  const [infectados, setInfectados]= useState(20);
 

  const handleSubmit = (event)=>{
    event.preventDefault();
    props.onSubmit(infectados);
  }

  return (
    <div className="resultados__novos-dados">
      <h1>Novos dados</h1>
    <form onSubmit={handleSubmit}
      style={{ position: 'relative' }}
    >
      <Label
        title="Indique a quantidade de contaminados para que seja calculada a probabilidade de quantas pessoas morreriam dado X quantidade de infectados nesta doença"
      />
      <div>
      <label htmlFor="infectados">Infectados</label>
      <input 
      value={infectados}
      onChange={(e)=>setInfectados(e.target.value)}></input>
      </div>
      <Button type="submit">submit</Button>
    </form>
    </div>
  );
}