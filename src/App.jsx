import { useState } from "react";
import "./App.css";

import { budgetContex } from "./context/BudgetContext";
import RouterConfig from "./routes/RouterConfig";

function App() {
  const [budget, setBudget] = useState(0);

  return (
    <budgetContex.Provider value={{ budget, setBudget }}>
      <RouterConfig />
    </budgetContex.Provider>
  );
}

export default App;
