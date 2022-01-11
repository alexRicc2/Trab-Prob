import React, { useState } from "react";
import Rform from "../Forms/Rform";
import Chart from "../Chart";
export default function Contagio() {
  const [dados, setDados] = useState([]);
  //i=meses, j=dias
  const handleSubmit = (R, T, recupera) => {
    var plot=[];
    var aux=Array(10).fill(0)
    // aux.push(5,5);
    // aux=aux.map(element=>element+1);
    
    
    for (var i = 1; i <= 12; i++) {
      for (var j = 1; j <= 30; j++) {


        for(var index=0;index<aux.length;index++){
          aux[index]++;
          if(aux[index]>=recupera){
            aux.push(0,0);
            aux.splice(index,i);
            console.log(aux);
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
