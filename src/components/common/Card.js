import React from "react";
import './Card.scss'
export default function Card(props) {
  return(
    <div className={"card "+props.className} onClick={props.onClick} style={ props.click ? {cursor: 'pointer'} : null }>
      {props.children}
    </div>
  );
}
