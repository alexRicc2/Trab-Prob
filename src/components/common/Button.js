import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss"
export default function Button(props){
  if(props.type!==undefined)
    return <button className="button" onClick={props.onClick}>{props.children}</button>
  return(
  <Link to={props.to===undefined ? '/' : props.to}>
    <button className="button" disabled={props.disabled}>{props.children}</button>
  </Link>
  )
}