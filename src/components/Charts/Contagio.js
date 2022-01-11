import React, { useState } from "react";
import Rform from "../Forms/Rform";
import Chart from "../Chart";

//gera valor aleatório na distribuição Poisson com base na média R
const handlePush = (R,aux) =>{
  var L=Math.exp(-R);
  var p=1;
  var k=0;

  do{
    k++;
    p*=Math.random();
  }while(p>L)

  for(var i=0;i<k-1;i++){
    aux.push(0);
  }
  // console.log(k-1);
}



export default function Contagio() {
  const [dados, setDados] = useState([]);
  //i=meses, j=dias
  const handleSubmit = (R, T, recupera) => {
    var plot = [];
    var aux = Array(10).fill(0);
    for (var i = 1; i <= 11; i++) {
      if (aux.length > 100000) break;
      for (var j = 1; j <= 30; j++) {
        // console.log(aux.length);
        if (aux.length > 100000) break;
        for (var index = 0; index < aux.length; index++) {
          aux[index]++;
          if (aux[index] >= recupera) {
            handlePush(R,aux);
            aux.splice(index, 1);
          }
        }
      }
      plot.push([i, aux.length]);
    }
    setDados([{ label: "Qtd. Infectados", data: plot }]);
  };


  return (
    <div>
      <Chart data={dados} type="line" />
      <Rform onSubmit={handleSubmit}></Rform>
    </div>
  );
}
