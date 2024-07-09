import { useState } from "react";
import Counter from "./components/Counter";

import "./App.css";
import CounterAppLearn from "./components/CounterAppLearn";

function MyApp() {
  const [count, setCount] = useState(0);

  const handleAppIncrement = (newValue: number) => {
    setCount(newValue);
  };

  return (
    <div>
      <div>

      <h1>Welcome to Counter App</h1>
      <Counter title="Count" initialValue={count} onIncrement={handleAppIncrement} />
      </div>
    <div>
      <h2> Learn Counter App</h2>
      <CounterAppLearn title="my button" initialValue={count}/>
    </div>
    
    </div>
  );
}

export default MyApp;
