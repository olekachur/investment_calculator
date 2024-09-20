import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";

import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  return (
    <>
      <Header />
      <UserInput />
      <ResultTable />
    </>
  )
}

export default App
