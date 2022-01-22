import React, { useState, useContext, useEffect } from "react";
import Chart from "../Chart";
import { DoencaContext } from "../Doenca";

//gera valor aleatório na distribuição Poisson com base na média R
const handlePush = (R, aux) => {
  var L = Math.exp(-R);
  var p = 1;
  var k = 0;
  var total=0;

  do {
    k++;
    p *= Math.random();
  } while (p > L);

  for (var i = 0; i < k - 1; i++) {
    aux.push(0);
    total++;
  }
  return total
  // console.log(k-1);
};

const porcentMortes = (media) => {
  var L = Math.exp(-media);
  var p = 1;
  var k = 0;

  do {
    k++;
    p *= Math.random();
  } while (p > L);

  console.log(k-1);
  return k-1
};

export default function Contagio({infectados, mortos}) {

  var total=10;
  const { formState } = useContext(DoencaContext);
  const [dados, setDados] = useState([]);
  //i=meses, j=dias
  const handleSubmit = (R,T) => {
    var plot = [];
    var aux = Array(10).fill(0);
    for (var i = 1; i <= 12; i++) {
      if (aux.length > 100000) break;
      for (var j = 1; j <= 30; j++) {
        // console.log(aux.length);
        if (aux.length > 100000) break;
        for (var index = 0; index < aux.length; index++) {
          aux[index]++;
          if (aux[index] >= T) {
            total+=handlePush(R, aux);
            aux.splice(index, 1);
          }
        }
      }
      plot.push([i, aux.length]);
    }
    var percent=porcentMortes(1)//1% chance de morte
    setDados([{ label: "Qtd. Infectados", data: plot }]);
    console.log("total de infectados: "+total)
    infectados(total);
    console.log("porcentagem mortes: "+percent)
    console.log("total mortos: "+(percent/100)*total)
    mortos(Math.trunc((percent/100)*total));
  };
  useEffect( ()=> handleSubmit(formState?.taxa, formState?.tempoAgeVetor),[formState?.taxa, formState?.tempoAgeVetor])

  return (
    <div>
      <Chart data={dados} type="line" />
    </div>
  );
}