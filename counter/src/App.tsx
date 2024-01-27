import React, { useState } from "react";
import "./App.css";
type Counter = {
  initialCount?: number;
};

const App: React.FC<Counter> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState<number>(initialCount);
  return (
    <div className="counter-div">
      <h1>{count}</h1>
      <div className="counter-btn">
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          Decrement
        </button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default App;
