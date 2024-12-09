import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active" end>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/calculate"
            className="nav-link"
            activeClassName="active"
          >
            Calculator
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
