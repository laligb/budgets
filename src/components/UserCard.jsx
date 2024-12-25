import { useContext } from "react";
import { budgetContext } from "../context/BudgetContext";
import PropTypes from "prop-types";

function UserCard({ sortedUsers }) {
  const { users: contextUsers } = useContext(budgetContext);
  const users = sortedUsers.length > 0 ? sortedUsers : contextUsers;

  if (users.length === 0) {
    return <p>No users found.</p>;
  }
  return (
    <div className=" ">
      {users.map((user, index) => (
        <div
          key={index}
          className="row shadow m-3 rounded p-4 align-items-center"
        >
          <div key={index} className="col-lg-4 text-start">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.telephone}</p>
          </div>
          <div className="col-lg-4 text-center">
            <p>Services:</p>
            <ul>
              {user.fields.map((field, index) => {
                if (field === "web") {
                  return (
                    <li key={index}>
                      {field} ({user.pages} pages, {user.languages} languages )
                    </li>
                  );
                }
                return <li key={index}>{field}</li>;
              })}
            </ul>
          </div>
          <div className="col-lg-4 text-end">
            <p>Total</p>
            <h2>{user.budget}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

UserCard.propTypes = {
  sortedUsers: PropTypes.array.isRequired,
};

export default UserCard;
