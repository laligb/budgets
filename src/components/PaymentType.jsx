import { useContext } from "react";
import { budgetContext } from "../context/BudgetContext";

function PaymentType() {
  const { isAnnual, setIsAnnual } = useContext(budgetContext);

  const handleToggleAnnual = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <div className="form-check form-switch d-flex justify-content-center align-items-center my-5 ">
      Monthly Payment
      <input
        className="form-check-input mx-5"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={isAnnual}
        onChange={handleToggleAnnual}
        style={{
          cursor: "pointer",
          transform: "scale(1.8)",
          backgroundColor: isAnnual ? "green" : "initial",
          borderColor: isAnnual ? "green" : "gray",
        }}
      />
      Annual Payment
    </div>
  );
}

export default PaymentType;
