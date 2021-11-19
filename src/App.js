import React,{useState} from 'react';
import {MyChart} from './components/Grafico'
import {Form} from './components/Form'

function factor(num) {
  if (num < 0) 
        return -1;
  else if (num === 0) 
      return 1;
  else {
      return (num * factor(num - 1));
  }
}

const poisson = (media,x) =>{
  return(
    (Math.pow(media,x)*Math.exp(-media))/factor(x)
  )
}


function App() {

  const [dados,setDados]=useState([])

  const handleForm =(media)=>{
    var aux=[];
    for(var i=0;i<3*media;i++){
      aux.push([i,poisson(media,i)])
    }
    setDados(aux);
  }

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: dados
      }
    ],
    [dados]
  )
  return (
    <div>
      Trabalho PROBABILIDADE e ESTATISTICA
      <MyChart data={data}/>
      <Form onSubmit={handleForm}/>
    </div>
  );
}

export default App;
