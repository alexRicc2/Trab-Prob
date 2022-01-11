import React,{useState} from "react";

export default function Rform(props){
  const [T,setT]=useState("");
  const [R,setR]=useState("");
  const [recupera,setRecupera]=useState("");

  const handleR = (event) =>{
    setR(event.target.value)
  }
  const handleT = (event) =>{
    setT(event.target.value)
  }
  const handleRecupera = (event) =>{
    setRecupera(event.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    props.onSubmit(R,T,recupera);
  }


  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="r">R</label>
      <input type="number" step="0.0001" onChange={handleR} id="r"></input>
      <label htmlFor="t">T</label>
      <input type="number" step="0.0001" onChange={handleT} id="t"></input>
      <label htmlFor="recupera">recupera</label>
      <input type="number" step="0.0001" onChange={handleRecupera} id="recupera"></input>
      <button type="submit">submit</button>
    </form>
  )
}
