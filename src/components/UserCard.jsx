import { useContext } from "react";
import { budgetContex } from "../context/BudgetContext";

function UserCard() {
  const { users } = useContext(budgetContex);
  if (users.length === 0) {
    return <p>No users found.</p>;
  }
  return (
    <div className="row shadow m-3 rounded p-4 align-items-center ">
      <div className="col-lg-4 text-start">
        <h3>{users[0].name}</h3>
        <p>{users[0].email}</p>
        <p>{users[0].telephone}</p>
      </div>
      <div className="col-lg-4 text-center">
        <p>Services:</p>
        <li>seo</li>
        <li>ads</li>
      </div>
      <div className="col-lg-4 text-end">
        <p>Total</p>
        <h2>{users[0].budget}</h2>
      </div>
    </div>
  );
}

export default UserCard;
