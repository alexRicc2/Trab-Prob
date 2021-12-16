import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Button from "../common/Button";
import Modal from "../common/Modal";
import { useReducer, useState } from "react";
import "./NovaAnalise.scss";

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

export default function NovaAnalise(props) {
  const [error, setError] = useState(undefined);

  const [formState, dispatchForm] = useReducer(formReducer, {
    nome: "",
    taxa: "",
    mortalidade: "",
    tempoAgeVetor: "",
    tempoTornarVetor: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let aux of Object.entries(formState)) {
      if (aux[1] === "") {
        setError({ h2: "Erro.", p: "Todos os campos devem ser preenchidos." });
        return;
      }
    }
    if (
      formState.taxa < 0 ||
      formState.mortalidade < 0 ||
      formState.tempoAgeVetor < 0 ||
      formState.tempoTornarVetor < 0
    ) {
      setError({ h2: "Erro.", p: "Valores devem ser positivos." });
      return;
    }
    alert("submitado");
    const doencasLocal = JSON.parse(localStorage.getItem('doencas')) || []
    const novaDoenca = {
      nome: formState.nome,
      taxa: formState.taxa,
      mortalidade: formState.mortalidade,
      vetor: formState.tempoAgeVetor,
      tornaVetor: formState.tempoTornarVetor,
      data: new Date()
    }
    const doencasAtualizadas = [...doencasLocal, novaDoenca]
    localStorage.setItem('doencas', JSON.stringify(doencasAtualizadas))

    // props.onSubmit(formState)
  };

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

  return (
    <section className="nova-analise">
      {error && (
        <Modal
          h2={error.h2}
          p={error.p}
          onClick={() => {
            setError(undefined);
          }}
        />
      )}
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div className="nova-analise__big-input">
          <label htmlFor="nome">Nome da doença: </label>
          <input id="nome" onChange={handleNameChange}></input>
        </div>
        <div className="nova-analise__inputs">
          <div>
            <label htmlFor="tempo">Tempo que age como vetor (dias)</label>
            <input
              step="0.0001"
              id="tempo"
              type="number"
              onChange={handleTimeChange}
            ></input>
          </div>
          <div>
            <label htmlFor="taxa">Taxa de transmissão</label>
            <input
              step="0.0001"
              id="taxa"
              type="number"
              onChange={handleRateChange}
            ></input>
          </div>
          <div>
            <label htmlFor="mortalidade">Mortalidade (porcentagem)</label>
            <input
              step="0.0001"
              id="mortalidade"
              type="number"
              onChange={handleDeathChange}
            ></input>
          </div>
          <div>
            <label htmlFor="tempo-vetor">
              Tempo para se tornar vetor após infecção
            </label>
            <input
              step="0.0001"
              id="tempo-vetor"
              type="number"
              onChange={handleInfectionTimeChange}
            ></input>
          </div>
        </div>
        <Button type="submit">Concluído</Button>
      </form>
      <Footer />
    </section>
  );
}
