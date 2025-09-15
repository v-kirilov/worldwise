import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Welcome to WordWise</h1>
      <Link to="/product">Go to Product Page</Link>
    </div>
  );
}

export default Homepage;
