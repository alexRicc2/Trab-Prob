import React from "react";
import './Navbar.scss'
import { Link } from "react-router-dom";
export default function Navbar(props){
  return(
    <div className="navbar" style={props.style}>
      <Link className="navbar__h1" style={props.h1} to="/">Plague Chart</Link>
      <Link className="navbar__sobre" style={props.sobre} to="/">Sobre</Link>
    </div>
  )
}