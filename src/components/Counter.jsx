import { useState } from "react";
export default function Counter() {
  const [COUNTER, setCounter] = useState(0);
  const incrementByOne = () => {
    setCounter((prev) => prev + 1);
  };
  const decrementByOne = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="counter">
      <h3>Counter</h3>
      <p className="counter">{COUNTER}</p>
      <div className="">
        <button className="btn green" onClick={incrementByOne}>
          +
        </button>
        <button className="btn red" onClick={decrementByOne}>
          -
        </button>
      </div>
    </div>
  );
}
