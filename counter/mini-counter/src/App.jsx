import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function increment() {
    setNum(num + 1);
  }

  function decrement() {
    setNum(num - 1);
  }

  return (
    <div>
      <h1> {num}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default App;
