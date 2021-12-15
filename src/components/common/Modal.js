import React from "react";
import Button from "./Button";
import "./Modal.scss";
import ReactDOM from "react-dom";
export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className="backdrop" onClick={props.onClick}></div>
          <div className="modal">
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
            <Button type="button" onClick={props.onClick}>
              Ok
            </Button>
          </div>
        </>,document.getElementById("overlay-root")
      )}
    </>
  );
}
