import React, { useState } from "react";
import Rform from "../Forms/Rform";
import Chart from "../Chart";
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

//R é a média
//a probabilidade que poisson retornar que estiver mais próxima
//de number, será o número de infectados.
const handlePush = (R) => {
  var randomNumber=Math.random();
  var index;
  var aux=10000;
  var valoresPoisson=[]
  for(var i=0;i<3*R;i++){
    valoresPoisson.push(poisson(R,i));
  }
  for(var j=0;j<valoresPoisson.length;j++){
    if(Math.abs(valoresPoisson[j]-randomNumber)<aux){
      aux=Math.abs(valoresPoisson[j]-randomNumber);
      index=j;
    }
  }
  console.log(index);
}



export default function Contagio() {
  const [dados, setDados] = useState([]);
  //i=meses, j=dias
  const handleSubmit = (R, T, recupera) => {
    var plot = [];
    var aux = Array(1).fill(0);
    handlePush(R);
    for (var i = 1; i <= 11; i++) {
      if (aux.length > 100000) break;
      for (var j = 1; j <= 30; j++) {
        // console.log(aux.length);
        if (aux.length > 100000) break;
        for (var index = 0; index < aux.length; index++) {
          aux[index]++;
          if (aux[index] >= recupera) {
            aux.push(0, 0);
            aux.splice(index, 1);
          }
        }
      }
      plot.push([i, aux.length]);
    }
    setDados([{ label: "Qtd. Infectados", data: plot }]);
  };

  //a cada duas semanas se recupera.
  // const handleSubmit = (R, T) => {
  //   var aux = [];
  //   var Total = [];
  //   Total[1] = 1;
  //   for (var i = 1; i <= 12; i++) {
  //     if (i > 1) Total[i] = Total[i - 1];
  //     for (var j = 0; j < 30; j += T) {
  //       Total[i] = Total[i] + Total[i] * R;
  //       console.log(i,Total[i]);
  //     }
  //     aux.push([i, Total[i]]);
  //   }
  // setDados([{ label: "Qtd. Infectados", data: aux }]);
  //   console.log(aux);
  // };

  return (
    <div>
      <Chart data={dados} type="line" />
      <Rform onSubmit={handleSubmit}></Rform>
    </div>
  );
}
