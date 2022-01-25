import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span role="img" aria-label="programmer">
            👨‍💻
          </span>{" "}
          Dario Zubaray
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active" onClick={handleNavCollapse}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item active" onClick={handleNavCollapse}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/studies"
              >
                Studies
              </NavLink>
            </li>
            <li className="nav-item active" onClick={handleNavCollapse}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item active" onClick={handleNavCollapse}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/links"
              >
                Links
              </NavLink>
            </li>
            <li className="nav-item active" onClick={handleNavCollapse}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/github"
              >
                Github
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
