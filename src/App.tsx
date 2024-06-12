import { useState } from "react";
import Counter from "./components/Counter";

import "./App.css";

function MyApp() {
  const [count, setCount] = useState(0);

  const handleAppIncrement = (newValue: number) => {
    setCount(newValue);
  };

  return (
    <div>
      <h1>Welcome to Counter App</h1>
      <Counter title="Count" initialValue={count} onIncrement={handleAppIncrement} />
    </div>
  );
}

export default MyApp;
