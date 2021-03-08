import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            👨‍💻 Dario Zubaray
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/"
                >
                    Home
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink 
                    activeClassName="active"
                    className="nav-item nav-link" 
                    exact
                    to="/blog"
                >
                    Blog
                </NavLink>
              </li>
              <li className="nav-item active">
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
    )
}
