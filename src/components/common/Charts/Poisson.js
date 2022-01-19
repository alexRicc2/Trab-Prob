import React, { useState, useContext } from "react";
import { Pform } from "./Pform";
import Chart from "../Chart";
import { DoencaContext } from "../Doenca";
function factor(num) {
  if (num < 0) return -1;
  else if (num === 0) return 1;
  else {
    return num * factor(num - 1);
  }
}

const poisson = (media, x) => {
  return (Math.pow(media, x) * Math.exp(-media)) / factor(x);
};

export default function Poisson() {
  const [dados, setDados] = useState([]);
  const {formState} = useContext(DoencaContext)

  const handleSubmit = (infectados) => {
    const media = formState.mortalidade/100 * infectados
    var aux = [];
    for (var i = 0; i < infectados; i++) {
      aux.push([i, poisson(media, i)]);
    }
    setDados([{ label: "Probabilidade", data: aux }]);
  };

  return (
    <div>
      <Chart data={dados} type="bar"/>
      <Pform onSubmit={handleSubmit}></Pform>
    </div>
  );
}