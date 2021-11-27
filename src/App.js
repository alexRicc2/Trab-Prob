import Contagio from "./components/Charts/Contagio";
import Poisson from "./components/Charts/Poisson";
import FamiliaBinomial from './components/Charts/FamiliaBinomial'
function App() {
  return (
    <div style={{display:"flex",gap:"1rem"}}>
      <FamiliaBinomial/>
      <Contagio></Contagio>
      <Poisson></Poisson>
    </div>
  );
}

export default App;
