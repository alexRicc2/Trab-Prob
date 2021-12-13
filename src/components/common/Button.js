import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss"
export default function Button(props){
  return(
  <Link to={props.to===undefined ? '/' : props.to}>
    <button className="button">{props.children}</button>
  </Link>
  )
}