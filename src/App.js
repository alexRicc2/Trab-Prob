import React,{useState} from 'react';
import Rform from './components/Forms/Rform';
import LineChart from './components/Charts/LineChart';
function App() {

  const [dados,setDados] = useState([]);

  //a cada duas semanas se recupera.
  const handleSubmit = (R,T)=>{
    var aux=[]
    var Total=[]
    Total[1]=1
    for(var i=1;i<=12;i++){
      if(i>1)
        Total[i]=Total[i-1]
      for(var j=0;j<30;j+=T){
        Total[i]=Total[i]+(Total[i]*R)
      }
      aux.push([i,Total[i]])
    }
    setDados([{label:'asdasd',data:aux}])
    // setDados([{label:'asdasd',data:[[1,2],[2,4]]}])
    console.log(aux)
  }


  return (
    <div>
      {dados.length!==0 ? <LineChart data={dados}/> : <div style={{height: "40rem",width:"40rem", backgroundColor:"#dedede"}}/>}
      <Rform onSubmit={handleSubmit}></Rform>
    </div>
  );
}

export default App;
