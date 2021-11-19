import { Chart } from 'react-charts'



export default function LineChart(props){
  return(
    <div style={{height: "40rem",width:"40rem"}}>
      <Chart data={props.data} series={{type: 'line'}} axes={[{primary:true,type:'linear',position:'bottom'},{type:'linear',position:'left'}]}></Chart>
    </div>
  )
}