import { useContext, useEffect, useState } from "react";
import { budgetContex } from "../context/BudgetContext";

function UserForm() {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const { budget, users, setUsers, check, pages, languages } =
    useContext(budgetContex);

  function createUser(event) {
    event.preventDefault();

    const selectedFields = Object.keys(check).filter((key) => check[key]);
    const user = {
      name: name,
      telephone: telephone,
      email: email,
      budget: budget,
      fields: selectedFields,
      pages: pages,
      languages: languages,
    };

    setUsers([...users, user]);

    setName("");
    setTelephone("");
    setEmail("");
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <form
      action=""
      className="row g-3 align-items-center shadow p-4 rounded m-3"
    >
      <div className="col-auto">
        <label htmlFor="username" className="form-label">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="col-auto">
        <label htmlFor="telephone" className="form-label">
          <input
            type="tel"
            className="form-control"
            name="telephone"
            placeholder="+34123456789"
            pattern="\+34[0-9]{9}"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="col-auto">
        <label htmlFor="email" className="form-label">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="col-auto form-label">
        <button type="submit" className="btn btn-success" onClick={createUser}>
          Solicitar Pressupost
        </button>
      </div>
    </form>
  );
}

export default UserForm;
