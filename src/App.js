import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [number, setNumber] = useState(0);
  const [literalNumber, setLiteralNumber] = useState("");
  const numberList = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };

  const handlerLiteralNumber = (event) => {
    const value = event.target.value;
    if (value >= 0 && value <= 9) {
      setNumber(event.target.value);
    }
  };
  const add = () => {
    if (number < 9) {
      setNumber(number + 1);
    }
  };
  const sub = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  useEffect(() => {
    setLiteralNumber(numberList[number]);
  }, [number]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <button type="button" onClick={() => sub()}>
          -
        </button>
        <input
          type="number"
          value={number}
          // min={0}
          // max={9}
          onChange={(event) => handlerLiteralNumber(event)}
          onBlur={(event) => console.log(event.target.value)}
        />
        <button type="button" onClick={() => add()}>
          +
        </button>
      </div>
      <div>{literalNumber}</div>

      <div>{numberList[number]}</div>
    </div>
  );
}
