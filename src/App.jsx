import { useState } from "react";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";


function App() {
  const [input, setInput] = useState({
    initialInvestment: 100,
    annualInvestment: 120,
    expectedReturn: 6,
    duration: 1,
  });

  const inputValidation = input.duration >= 1;
  const validDataMessage = <p className="center">Plese enter <b>duration</b> greater than zero</p>;

  function handleInputChange(inputIdentiffier, newValue) {
    setInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentiffier]: +newValue,
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput handlerInput={handleInputChange} inputValue={input} />
      {!inputValidation && validDataMessage}
      {inputValidation && <ResultTable investmentResult={input} />}
    </>
  )
}

export default App;
