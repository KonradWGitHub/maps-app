import { NavLink } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <span className="fa-solid fa-map-location-dot"></span>
        <span className="navbar-logo">Maps</span>
      </div>
      <NavLink to="/" className="navbar--link">
        Home
      </NavLink>
    </div>
  );
};

export default Navbar;
