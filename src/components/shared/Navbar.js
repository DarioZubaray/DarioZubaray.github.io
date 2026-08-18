import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "../ui/ThemeToggle";
import { LanguageSelector } from "../ui/LanguageSelector";

export const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const { t } = useTranslation();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'var(--bg-navbar)', borderBottom: '1px solid var(--border-color)' }}>
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
                {t('nav.home')}
              </NavLink>
            </li>
            <li className="nav-item active" onClick={handleNavCollapse}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/studies"
              >
                {t('nav.studies')}
              </NavLink>
            </li>
            <li className="nav-item active" onClick={handleNavCollapse}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/blog"
              >
                {t('nav.blog')}
              </NavLink>
            </li>
            <li className="nav-item active" onClick={handleNavCollapse}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/links"
              >
                {t('nav.links')}
              </NavLink>
            </li>
            <li className="nav-item active" onClick={handleNavCollapse}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/demo"
              >
                {t('nav.demo')}
              </NavLink>
            </li>
            <li className="nav-item active" onClick={handleNavCollapse}>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/github"
              >
                {t('nav.github')}
              </NavLink>
            </li>
          </ul>
          <div className="ml-2 d-none d-lg-flex align-items-center">
            <LanguageSelector />
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="d-lg-none mt-2 d-flex align-items-center">
          <LanguageSelector />
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
