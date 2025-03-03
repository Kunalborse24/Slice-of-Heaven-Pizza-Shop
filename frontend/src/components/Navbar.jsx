import React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import "../css/Navbar.css";
import { GiFullPizza } from "react-icons/gi";

export function Navbar() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const token = sessionStorage.getItem("token");

  const onLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-lg "
      style={{ background: " #007bff" }}
    >
      <div className="container-fluid">
        <Link
          to="/"
          className="me-auto d-flex align-items-center"
          style={{
            marginLeft: "5rem",
            textDecoration: "none",
            fontWeight: "bold",
            color: "black",
          }}
        >
          <GiFullPizza className="mx-2" />
          <span className="mx-1">Slice of Heaven</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home Link */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">
                Home
              </NavLink>
            </li>

            {/* Cart Link with Icon */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart" activeClassName="active">
                <FaShoppingCart className="me-2" />
                Cart ({cart.items.length})
              </NavLink>
            </li>

            {/* Orders Link */}
            <li className="nav-item">
              {token ? (
                <NavLink
                  className="nav-link"
                  to="/orders"
                  activeClassName="active"
                >
                  Orders
                </NavLink>
              ) : (
                <NavLink
                  className="nav-link"
                  to="/signin"
                  activeClassName="active"
                >
                  Orders
                </NavLink>
              )}
            </li>

            {/* Login/Logout Button */}
            <li className="nav-item">
              {token ? (
                <Button
                  onClick={onLogout}
                  className="btn btn-outline-light d-flex align-items-center"
                >
                  <FaUserAlt className="me-2" />
                  Logout
                </Button>
              ) : (
                <Link to="/signin">
                  <Button className="btn btn-outline-light d-flex align-items-center">
                    <FaUserAlt className="me-2" />
                    Login
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
