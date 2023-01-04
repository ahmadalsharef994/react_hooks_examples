import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(() => {
    console.log("this only runs only on the 1st render");
    return 4;
  });
  const [state, setState] = useState({ counter: 5, theme: "red" });

  const changeState = () => {
    setState((prevState) => {
      return { ...state, counter: prevState.counter + 1 };
    });
  };

  const decrementCount = () => {
    setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count} </span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App;
