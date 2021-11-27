import React, { useState } from 'react';
import { Fform } from '../Forms/Fform';
import Chart from "../Chart";

const fatorial = n => {
  if(n === 0) return 1;
  if (n > 1) {
      return n * fatorial(n - 1)
  }
  return n
}

export default function FamiliaBinomial(){
  
 

  const [dados, setDados] = useState([]);
  const handleSubmit = (R,T,contaminados, populacao, familia) => {
    
    //necessario alterar o contagio da doença
    let aux = [];
    let Total = [];
    Total[1] = contaminados;
    
    for (let i = 1; i <= T; i++) {
      if (i > 1) Total[i] = Total[i - 1];

      for (let j = 0; j < 4; j++) {
        Total[i] = Total[i] + Total[i] * R;
      }

     
    }
    const  contaminadosAfter = Total[T];
    const P = contaminadosAfter / populacao;
    let binomial = []
    console.log('P:',P);
    if(P >= 0 && P <= 1){
      for(let i=0; i<= familia; i++){
        
        binomial[i] = fatorial(familia)/(fatorial(i)*fatorial(familia-i))* P**i * (1-P)**(familia-i);
        aux.push([i, binomial[i]]);
      } 
    }

    setDados([{ label: "asdasd", data: aux }]);
  }
  return (
    <div>
      <Chart data={dados} type="bar" tooltip/>
      <Fform onSubmit={handleSubmit}></Fform>
    </div>
  )
}