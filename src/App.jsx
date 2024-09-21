import { useState } from "react";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";

import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 15,
    duration: 1,
  });

  function handleInputChange(inputIdentiffier, newValue) {
    setInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentiffier]: newValue,
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput handlerInput={handleInputChange} inputValue={input} />
      <ResultTable />
    </>
  )
}

export default App;
