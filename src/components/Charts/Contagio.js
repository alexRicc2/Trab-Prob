import React, { useState } from "react";
import Rform from "../Forms/Rform";
import Chart from "../Chart";
export default function Contagio() {
  const [dados, setDados] = useState([]);

  //a cada duas semanas se recupera.
  const handleSubmit = (R, T) => {
    var aux = [];
    var Total = [];
    Total[1] = 1;
    for (var i = 1; i <= 12; i++) {
      if (i > 1) Total[i] = Total[i - 1];
      for (var j = 0; j < 30; j += T) {
        Total[i] = Total[i] + Total[i] * R;
        console.log(i,Total[i]);
      }
      aux.push([i, Total[i]]);
    }
    setDados([{ label: "Qtd. Infectados", data: aux }]);
    console.log(aux);
  };

  return (
    <div>
      <Chart data={dados} type="line"/>
      <Rform onSubmit={handleSubmit}></Rform>
    </div>
  );
}
