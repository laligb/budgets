import CustomForm from "../components/CustomForm";
import UserForm from "../components/UserForm";
import CurrentBudgets from "../layouts/CurrentBudgets";

function CalculatorPage() {
  return (
    <>
      <CustomForm />
      <UserForm />

      <hr
        className="row m-3"
        style={{
          borderTop: "1px dashed black",
        }}
      />

      <CurrentBudgets />
    </>
  );
}

export default CalculatorPage;
