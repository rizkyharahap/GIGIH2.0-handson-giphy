import React from "react";
import "./search.css";

const SearchBar = ({ styled, placeholder, buttonText }) => {
  return (
    <div className="search" style={styled}>
      <input type="search" placeholder={placeholder} />
      <button>{buttonText}</button>
    </div>
  );
};

export default SearchBar;
