import React, { useState} from 'react';
import Chart from "../Chart";
import { Fform } from './Fform';
const fatorial = n => {
  if(n === 0) return 1;
  if (n > 1) {
      return n * fatorial(n - 1)
  }
  return n
}

export default function FamiliaBinomial(){
 


  const [dados, setDados] = useState([]);
  const [estimativaInfectadosPos2semana, setEstimativaInfectadosPos2semana] = useState(0);
  const handleSubmit = (R,contaminados, populacao, familia) => {
    
    //necessario alterar o contagio da doença
    let aux = [];
    let Total = [];
    Total[1] = contaminados;
    
    for (let i = 1; i <= 2; i++) {
      if (i > 1) Total[i] = Total[i - 1];

      
        console.log('total: ',Total[i])
        Total[i] = Total[i] + Total[i] * R;
         
    }
    const  contaminadosAfter = Total[2];
    setEstimativaInfectadosPos2semana(contaminadosAfter)
    console.log('after: ',contaminadosAfter)
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
      <p>Estimativa de infectados após 2 semanas: {estimativaInfectadosPos2semana}</p>
      <Fform onSubmit={handleSubmit}></Fform>
    </div>
  )
}