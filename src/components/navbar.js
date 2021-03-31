import { Navbar } from "./styled";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      <nav className="main">
        <div>
          <img src="/images/splitMoni-logo.svg" alt="splitmoni" />
        </div>
        <ul>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
        <div>
          <Link to="/">Home</Link>
        </div>
      </nav>
    </Navbar>
  );
};

export default NavBar;
