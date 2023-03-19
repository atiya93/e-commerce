import logo from './logo.svg';
import './App.css';
import Greetings from "./component/body/Greetings";



function App() {
  return (
    <div className="App">
      <Greetings username={"Zakota jin"} password={"Try123"}/>
      <Greetings username={"Zakota jin"} />
      <Greetings username={"Zakota jin"} />
      <Greetings username={"Zakota jin"} />

    </div>
  );
}

export default App;
