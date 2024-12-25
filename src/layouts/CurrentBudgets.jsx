import { useContext, useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { budgetContext } from "../context/BudgetContext";

function CurrentBudgets() {
  const [activeSort, setActiveSort] = useState("data");
  const { users } = useContext(budgetContext);
  const [sort, setSort] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSort(filteredUsers);
  }, [searchQuery, users]);

  const handleSort = (sortType) => {
    const newOrder =
      activeSort === sortType && sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    setActiveSort(sortType);

    const sortedArray = [...sort].sort((a, b) => {
      if (sortType === "name") {
        return newOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      if (sortType === "data") {
        return newOrder === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      if (sortType === "import") {
        return newOrder === "asc" ? a.budget - b.budget : b.budget - a.budget;
      }
      return 0;
    });

    setSort(sortedArray);
  };

  const handleSearch = (e) => {
    console.log("Search Input:", e.target.value);
    setSearchQuery(e.target.value);
  };

  console.log("Filtered Users:", sort);

  return (
    <div>
      <h3>Current budgets</h3>
      <div className="navbar navbar-expand-lg navbar-light m-2">
        <form className="d-flex position-relative  ms-auto px-2">
          <input
            type="text"
            className="form-control  search-bar pe-5"
            placeholder="Search..."
            aria-label="Search"
            onChange={handleSearch}
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
              activeSort === "data" ? "fw-bold text-black" : "text-muted"
            }`}
            onClick={() => handleSort("data")}
          >
            Data
            {activeSort === "data" && (
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            )}
          </button>
          <button
            className={`btn btn-link p-0 text-decoration-none ${
              activeSort === "import" ? "fw-bold text-black" : "text-muted"
            }`}
            onClick={() => handleSort("import")}
          >
            Import
            {activeSort === "import" && (
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            )}
          </button>
          <button
            className={`btn btn-link p-0 text-decoration-none ${
              activeSort === "name" ? "fw-bold text-black" : "text-muted"
            }`}
            onClick={() => handleSort("name")}
          >
            Name
            {activeSort === "name" && (
              <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
            )}
          </button>
        </div>
      </div>
      <UserCard sortedUsers={sort} />
    </div>
  );
}

export default CurrentBudgets;
