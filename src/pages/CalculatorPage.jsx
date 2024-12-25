import CustomForm from "../components/CustomForm";
import UserForm from "../components/UserForm";
import CurrentBudgets from "../layouts/CurrentBudgets";
import PaymentType from "../components/PaymentType";

function CalculatorPage() {
  return (
    <>
      <PaymentType />
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
