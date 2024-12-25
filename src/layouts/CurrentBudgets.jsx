import { useContext, useState } from "react";
import UserCard from "../components/UserCard";
import { budgetContex } from "../context/BudgetContext";

function CurrentBudgets() {
  const [activeSort, setActiveSort] = useState("data");
  const { users } = useContext(budgetContex);
  const [sort, setSort] = useState([]);

  const handleSort = (sortType) => {
    setActiveSort(sortType);

    let sortedArray = [...users];

    if (sortType === "name") {
      sortedArray = sortedArray.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortType === "data") {
      sortedArray = sortedArray.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    }

    if (sortType === "import") {
      sortedArray = sortedArray.sort((a, b) => a.budget - b.budget);
    }

    setSort(sortedArray);
    console.log(sort);
  };

  return (
    <div>
      <h3>Current budgets</h3>
      <div className="navbar navbar-expand-lg navbar-light">
        <form className="d-flex position-relative">
          <input
            type="text"
            className="form-control  search-bar pe-5"
            placeholder="Search..."
            aria-label="Search"
          />
          <button
            className="btn position-absolute top-50 end-0 translate-middle-y"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
        <div className="d-flex align-items-center gap-3">
          <button
            className={`btn btn-link p-0 text-decoration-none ${
              activeSort === "data" ? "fw-bold" : "text-muted"
            }`}
            onClick={() => handleSort("data")}
          >
            Data
            {activeSort === "data" && (
              <i className="bi bi-caret-down-fill ms-1"></i>
            )}
          </button>
          <button
            className={`btn btn-link p-0 text-decoration-none ${
              activeSort === "import" ? "fw-bold" : "text-muted"
            }`}
            onClick={() => handleSort("import")}
          >
            Import
            {activeSort === "import" && (
              <i className="bi bi-caret-down-fill ms-1"></i>
            )}
          </button>
          <button
            className={`btn btn-link p-0 text-decoration-none ${
              activeSort === "name" ? "fw-bold" : "text-muted"
            }`}
            onClick={() => handleSort("name")}
          >
            Name
            {activeSort === "name" && (
              <i className="bi bi-caret-down-fill ms-1"></i>
            )}
          </button>
        </div>
      </div>
      <UserCard sortedUsers={sort} />
    </div>
  );
}

export default CurrentBudgets;
