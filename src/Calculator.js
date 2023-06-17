import React, { useState } from "react";
import "./styles.css";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    setExpression(expression + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult(0);
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(expression);
      setResult(calculatedResult);
      setExpression(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleDelete = () => {
    setExpression(expression.slice(0, -1));
  };

  const handleToggleNegative = () => {
    if (expression[0] === "-") {
      setExpression(expression.slice(1));
    } else {
      setExpression("-" + expression);
    }
  };

  const handleSquareRoot = () => {
    try {
      const sqrtResult = Math.sqrt(eval(expression));
      setResult(sqrtResult);
      setExpression(sqrtResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handlePercentage = () => {
    try {
      const percentageResult = eval(expression) / 100;
      setResult(percentageResult);
      setExpression(percentageResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleExponentiation = () => {
    try {
      const [base, exponent] = expression.split("exp");
      const powerResult = Math.pow(eval(base), eval(exponent));
      setResult(powerResult);
      setExpression(powerResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleSquare = () => {
    try {
      const squareResult = Math.pow(eval(expression), 2);
      setResult(squareResult);
      setExpression(squareResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleInverse = () => {
    try {
      const inverseResult = 1 / eval(expression);
      setResult(inverseResult);
      setExpression(inverseResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" className="value" value={expression} readOnly />
        <div className="buttons">
          <div className="row">
            <span onClick={handleClear} className="clear">
              AC
            </span>
            <span onClick={handleDelete}>DEL</span>
            <span onClick={handleToggleNegative}>+/-</span>
            <span onClick={() => handleClick("/")}>/</span>
          </div>
          <div className="row">
            <span onClick={handlePercentage}>%</span>
            <span onClick={handleExponentiation}>exp</span>
            <span onClick={handleSquare}>x²</span>
            <span onClick={handleInverse}>1/x</span>
          </div>
          <div className="row">
            <span onClick={() => handleClick("7")}>7</span>
            <span onClick={() => handleClick("8")}>8</span>
            <span onClick={() => handleClick("9")}>9</span>
            <span onClick={() => handleClick("*")}>*</span>
          </div>
          <div className="row">
            <span onClick={() => handleClick("4")}>4</span>
            <span onClick={() => handleClick("5")}>5</span>
            <span onClick={() => handleClick("6")}>6</span>
            <span onClick={() => handleClick("-")}>-</span>
          </div>
          <div className="row">
            <span onClick={() => handleClick("1")}>1</span>
            <span onClick={() => handleClick("2")}>2</span>
            <span onClick={() => handleClick("3")}>3</span>
            <span onClick={() => handleClick("+")}>+</span>
          </div>
          <div className="row">
            <span onClick={() => handleClick("0")}>0</span>
            <span onClick={() => handleClick(".")}>.</span>
            <span onClick={calculateResult} className="equal">
              =
            </span>
            <span onClick={handleSquareRoot}>√</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
