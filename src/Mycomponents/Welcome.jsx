import { Link } from "react-router-dom";
import "../index.css";

function Welcome() {
  return (
    <div className="welcome">
      <h4>Welcome To</h4>
      <h1>Clarity OS</h1>
      <p>You’re not here to get answers. You’re here to remember</p>

      <Link to="/diagnostic/question-1">
        <button className="calibrate-btn">Begin Calibration</button>
      </Link>
    </div>
  );
}

export default Welcome;
