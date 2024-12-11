import { useState } from "react";
import "./App.css";

import { budgetContex } from "./context/BudgetContext";
import RouterConfig from "./routes/RouterConfig";

function App() {
  const [budget, setBudget] = useState(0);
  const [users, setUsers] = useState([]);
  const [check, setCheck] = useState({
    seo: false,
    ads: false,
    web: false,
  });
  const [pages, setPages] = useState(0);
  const [languages, setLanguages] = useState(0);

  return (
    <budgetContex.Provider
      value={{
        budget,
        setBudget,
        users,
        setUsers,
        check,
        setCheck,
        pages,
        setPages,
        languages,
        setLanguages,
      }}
    >
      <RouterConfig />
    </budgetContex.Provider>
  );
}

export default App;
