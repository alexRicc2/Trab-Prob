import Contagio from "./components/Charts/Contagio";
import Poisson from "./components/Charts/Poisson";
function App() {
  return (
    <div style={{display:"flex",gap:"1rem"}}>
      <Contagio></Contagio>
      <Poisson></Poisson>
    </div>
  );
}

export default App;
