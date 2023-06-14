import React from "react";

const Navbar = ({ handleClick }) => {
  return (
    <nav className="navbar flexbox element">
      <h1 className="title">Where in the world?</h1>
      <button className="btn theme-toggle-btn" onClick={handleClick}>
        <i className="fa fa-moon"></i>
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
