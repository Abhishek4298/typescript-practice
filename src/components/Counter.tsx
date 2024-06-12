import React, { useState } from "react";

// Interface for Counter component props
interface CounterProps {
  title: string;
  initialValue: number;
  onIncrement?: (newValue: number) => void; // Optional callback for parent handling
}

const Counter: React.FC<CounterProps> = ({ title, initialValue, onIncrement }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    // Call the optional onIncrement callback from the parent if provided
    onIncrement?.(newCount);
  };

  return (
    <>
      {count}
      <button onClick={handleIncrement}>{title}</button>
    </>
  );
};

export default Counter;

