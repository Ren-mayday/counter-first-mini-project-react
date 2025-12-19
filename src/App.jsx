import { useState } from "react";
import "./App.css";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";

function App() {
  // 1. State: aquí guardo el contador
  const [count, setCount] = useState(0);

  // 2. Funciones para modificar el contador
  const sumClick = () => setCount(count + 1);
  const decrementClick = () => setCount(count - 1);

  return (
    <>
      <ShowCount count={count}></ShowCount>
      <div className="buttons">
        <Button className="btn-sumar" onClick={sumClick}>
          Sumar
        </Button>
        <Button className="btn-restar" onClick={decrementClick}>
          Restar
        </Button>
      </div>
    </>
  );
}

export default App;
