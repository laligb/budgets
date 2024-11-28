import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { budgetContex } from "./context/BudgetContext";

function App() {
  const [budget, setBudget] = useState(0);

  return (
    <budgetContex.Provider value={{ budget, setBudget }}>
      <div className="header">Aconsegeis la millor calidad</div>
      <div className="container w-100 mx-auto" style={{ maxWidth: "600px" }}>
        <Form />
      </div>
    </budgetContex.Provider>
  );
}

export default App;
