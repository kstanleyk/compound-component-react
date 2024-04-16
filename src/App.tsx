import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <>
      <h1>Compound Component Pattern</h1>
      <Counter>
        <Counter.Label>My super flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>
    </>
  );
}

export default App;
