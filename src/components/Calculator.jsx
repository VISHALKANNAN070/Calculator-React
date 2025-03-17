import React, { useState } from "react";
import "../styles/Calculator.css";

function Calculator() {

  const [curr, setCurr] = useState("");
  const [prev, setPrev] = useState("");
  const [operator, setOperator] = useState("");

  const handleNum = (num) => {
    if (num === "." && curr.includes(".")) return;
    if (curr === "0" && num === "0") return;
    setCurr((prev) => prev + num);
  };

  const handleOperator = (op) => {
    if (curr === '') return;
    if (operator !== '') return;
    setOperator(op);
    setPrev(curr);
    setCurr('');
};

  const delOne = () => {
    setCurr(curr.slice(0, -1));
  };

  const allClear = () => {
    setCurr("");
    setPrev("");
    setOperator("");
  };

  const Result = () => {
    if (prev === "" || curr === "") return;
    let result;
    const num1 = parseFloat(prev);
    const num2 = parseFloat(curr);
    if (isNaN(num1) || isNaN(num2)) return;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Error";
        break;
      default:
        return;
    }
    setCurr(result.toString());
    setPrev("");
    setOperator("");
  };

  return (
    <div className="calc-container">
      <div className="output">
        <div className="prev">
          {prev} {operator}
        </div>
        <div className="curr">{curr}</div>
      </div>
 <div className="calc-grid">
 <button className="span-two" onClick={allClear}>
        AC
      </button>
      <button onClick={delOne}>DEL</button>
      <button onClick={() => handleOperator("/")}>/</button>
      <button onClick={() => handleNum("1")}>1</button>
      <button onClick={() => handleNum("2")}>2</button>
      <button onClick={() => handleNum("3")}>3</button>
      <button onClick={() => handleOperator("*")}>*</button>
      <button onClick={() => handleNum("4")}>4</button>
      <button onClick={() => handleNum("5")}>5</button>
      <button onClick={() => handleNum("6")}>6</button>
      <button onClick={() => handleOperator("+")}>+</button>
      <button onClick={() => handleNum("7")}>7</button>
      <button onClick={() => handleNum("8")}>8</button>
      <button onClick={() => handleNum("9")}>9</button>
      <button onClick={() => handleOperator("-")}>-</button>
      <button onClick={() => handleNum(".")}>.</button>
      <button onClick={() => handleNum("0")}>0</button>
      <button className="span-two equal" onClick={Result}>
        =
      </button>
 </div>
    </div>
  );
}

export default Calculator;
