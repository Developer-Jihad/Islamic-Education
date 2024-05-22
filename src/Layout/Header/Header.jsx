import "./Header.css";
import img from "../../images/ইলমুল-কুরআন লোগো.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header d-flex align-items-center justify-content-between px-5">
      <div>
        <NavLink className="nav-link" to="/home">
          <img className="logo" src={img} alt="" />
        </NavLink>
      </div>

      <div className="d-flex gap-5">
        <NavLink className="nav-link" to="/home">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/services">
          Services
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About Us
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
