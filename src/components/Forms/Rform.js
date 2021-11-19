import React,{useState} from "react";

export default function Rform(props){
  const [T,setT]=useState("");
  const [R,setR]=useState("");

  const handleR = (event) =>{
    setR(event.target.value)
  }
  const handleT = (event) =>{
    setT(event.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    props.onSubmit(R,T);
  }


  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="r">R</label>
      <input type="number" onChange={handleR} id="r"></input>
      <label htmlFor="t">T</label>
      <input type="number" onChange={handleT} id="t"></input>
      <button type="submit">submit</button>
    </form>
  )
}
