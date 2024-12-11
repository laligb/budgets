import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomForm from "../components/CustomForm";
import UserForm from "../components/UserForm";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import CurrentBudgets from "../layouts/CurrentBudgets";

function CalculatorPage() {
  return (
    <>
      <CustomForm />
      <UserForm />
      <div className="text-center my-4">
        <FontAwesomeIcon icon={faMinus} />
      </div>

      <CurrentBudgets />
    </>
  );
}

export default CalculatorPage;
