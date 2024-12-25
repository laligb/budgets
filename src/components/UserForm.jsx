import { useContext, useEffect, useState } from "react";
import { budgetContex } from "../context/BudgetContext";

function UserForm() {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const { budget, users, setUsers, check, pages, languages } =
    useContext(budgetContex);

  function createUser(event) {
    event.preventDefault();

    const newErrors = validateForm();

    if (budget === 0) {
      alert("Please, choose at least one service");
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      alert("Some inputs are invalid. Please correct the highlighted fields.");
      return;
    }

    const formattedDate = new Date().toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const selectedFields = Object.keys(check).filter((key) => check[key]);
    const user = {
      name: name,
      telephone: telephone,
      email: email,
      budget: budget,
      fields: selectedFields,
      pages: pages,
      languages: languages,
      date: formattedDate,
    };

    setUsers([...users, user]);

    setName("");
    setTelephone("");
    setEmail("");
    setErrors({});
  }

  useEffect(() => {
    console.log(users);
  }, [users]);

  function validateForm() {
    const newErrors = {};
    if (!name) newErrors.name = "Please enter your name";
    if (name.length < 3)
      newErrors.name = "The name should be at least 3 letters";
    if (!/^\+34[0-9]{9}$/.test(telephone))
      newErrors.telephone = "Please enter correct telephone number";
    if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Please enter correct email";

    users.forEach((user) => {
      if (user.telephone === telephone)
        newErrors.telephone = "This number is already exist";
      if (user.email === email) newErrors.email = "This email is already exist";
    });
    return newErrors;
  }

  return (
    <form
      action=""
      className="row g-3 align-items-center shadow p-4 rounded m-3"
      noValidate
    >
      <div className="col-auto">
        <label htmlFor="name" className="form-label">
          <input
            id="validateName"
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : name ? "is-valid" : ""}`}
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </label>
      </div>

      <div className="col-auto">
        <label htmlFor="telephone" className="form-label">
          <input
            type="tel"
            className={`form-control ${errors.telephone ? "is-invalid" : telephone ? "is-valid" : ""}`}
            name="telephone"
            placeholder="+34123456789"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
          {errors.telephone && (
            <div className="invalid-feedback">{errors.telephone}</div>
          )}
        </label>
      </div>

      <div className="col-auto">
        <label htmlFor="email" className="form-label">
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : email ? "is-valid" : ""}`}
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
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
