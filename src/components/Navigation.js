import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="masthead p-3">
      <div className="inner">
        <h3 className="masthead-brand">Joel Kiggwe</h3>
        <nav className="nav nav-masthead justify-content-center">
          <NavLink className="nav-link active" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/projects">
            Projects
          </NavLink>
          <NavLink className="nav-link" to="/contactme">
            Contact Me
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
