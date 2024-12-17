import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="text-center py-5">
      <div>
        <h1>Welcome To the Budget Website</h1>
      </div>
      <br></br>
      <p>To calculate the budget, click here:</p>
      <Link to="/calculate" className="btn btn-success">
        Go to Calculator
      </Link>
    </div>
  );
}

export default WelcomePage;
