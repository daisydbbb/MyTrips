import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>MyTrips</h1>
      <Link to="/pricing">Pricing</Link>
      <Route></Route>
    </div>
  );
}

export default Homepage;
