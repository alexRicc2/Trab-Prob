import React, { createContext, useReducer } from 'react';
import { useNavigate } from "react-router-dom";


export const DoencaContext = createContext([]);
DoencaContext.displayName = "Doenca";

const formReducer = (state, action) => {
  if (action.type === "NAME_INPUT") {
    let { nome, ...novoEstado } = state;
    return {
      nome: action.val,
      ...novoEstado,
    };
  }
  if (action.type === "RATE_INPUT") {
    let { taxa, ...novoEstado } = state;
    return {
      taxa: action.val,
      ...novoEstado,
    };
  }
  if (action.type === "DEATH_INPUT") {
    let { mortalidade, ...novoEstado } = state;
    return {
      mortalidade: action.val,
      ...novoEstado,
    };
  }
  if (action.type === "ACTION_TIME_INPUT") {
    let { tempoAgeVetor, ...novoEstado } = state;
    return {
      tempoAgeVetor: action.val,
      ...novoEstado,
    };
  }
  if (action.type === "INFECTION_TIME_INPUT") {
    let { tempoTornarVetor, ...novoEstado } = state;
    return {
      tempoTornarVetor: action.val,
      ...novoEstado,
    };
  }
  return {
    nome: "",
    taxa: "",
    mortalidade: "",
    tempoAgeVetor: "",
    tempoTornarVetor: "",
  };
};



export const DoencaProvider = ({ children }) => {
  
  const navigate = useNavigate();

  const [formState, dispatchForm] = useReducer(formReducer, {
    nome: "",
    taxa: "",
    mortalidade: "",
    tempoAgeVetor: "",
    tempoTornarVetor: "",
  });

  const handleNameChange = (event) => {
    dispatchForm({ type: "NAME_INPUT", val: event.target.value });
  };

  const handleTimeChange = (event) => {
    dispatchForm({ type: "ACTION_TIME_INPUT", val: event.target.value });
  };

  const handleRateChange = (event) => {
    dispatchForm({ type: "RATE_INPUT", val: event.target.value });
  };

  const handleDeathChange = (event) => {
    dispatchForm({ type: "DEATH_INPUT", val: event.target.value });
  };

  const handleInfectionTimeChange = (event) => {
    dispatchForm({ type: "INFECTION_TIME_INPUT", val: event.target.value });
  };

  function doencaSalva(doenca){
    console.log(doenca)
    console.log('chamou')
    dispatchForm({ type: "NAME_INPUT", val: doenca.nome })
    dispatchForm({ type: "ACTION_TIME_INPUT", val: doenca.tempoAgeVetor})
    dispatchForm({ type: "RATE_INPUT", val: doenca.taxa })
    dispatchForm({ type: "DEATH_INPUT", val: doenca.mortalidade })
    dispatchForm({ type: "INFECTION_TIME_INPUT", val: doenca.tempoTornaVetor })
    navigate('/estatisticas')
  }
  
  return (
    <DoencaContext.Provider value={{
      formState, 
      dispatchForm,
      handleNameChange,
      handleTimeChange,
      handleRateChange,
      handleDeathChange,
      handleInfectionTimeChange,
      doencaSalva
      }}>

      {children}
    </DoencaContext.Provider>
  )
}