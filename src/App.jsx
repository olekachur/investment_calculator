import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";

import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  return (<>
    <h1>React Investment Calculator</h1>
    <Header />
    <UserInput />
    <ResultTable />
  </>
  )
}

export default App
