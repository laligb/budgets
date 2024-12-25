import { useState } from "react";
import "./App.css";

import { budgetContext } from "./context/BudgetContext";
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
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <budgetContext.Provider
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
        isAnnual,
        setIsAnnual,
      }}
    >
      <RouterConfig />
    </budgetContext.Provider>
  );
}

export default App;
