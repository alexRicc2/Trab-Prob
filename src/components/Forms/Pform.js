import React,{useState} from "react";

export function Pform(props) {

  const [media,setMedia]=useState("")

  const handleInput = (event)=>{
    setMedia(event.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    props.onSubmit(media);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="media">Media</label>
      <input onChange={handleInput} id="media" type="number"></input>
      <button type="submit">submit</button>
    </form>
  );
}