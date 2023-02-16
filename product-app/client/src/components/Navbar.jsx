import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Product Admin
      </a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
            <NavLink to="/allproducts"> Home </NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <NavLink  to="/newproduct"> New Product </NavLink>
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
