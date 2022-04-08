import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ routes }) => {
  return (
    <nav className="App-header">
      <ul>
        {routes.map((route) => {
          return (
            <li key={route.path} className="App-link">
              <Link to={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
