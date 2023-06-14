import React, { useState } from "react";

const Search = ({ searchCountry, handleChange, filterBy, region }) => {
  // true if filter dropdown is open
  const [active, setActive] = useState(false);

  return (
    <section className="search-container flexbox">
      <div className="searchbox flexbox element">
        <i className="fa fa-search"></i>
        <input
          type="text"
          placeholder="Search for a container..."
          className="input"
          value={searchCountry}
          onChange={({ target }) => handleChange(target.value)}
        />
      </div>

      <div
        className={
          active
            ? "filter-container grid-flow active"
            : "filter-container grid-flow"
        }
      >
        <div
          className="selected flexbox element"
          onClick={() => setActive(!active)}
        >
          <span>{region ? region : "Filter by Region"}</span>{" "}
          <i className="fa fa-chevron-down"></i>
        </div>
        <div className="options grid-flow element">
          <p
            className="option"
            onClick={() => {
              filterBy("");
              setActive(false);
            }}
          >
            Filter by Region
          </p>
          <p
            className="option"
            onClick={() => {
              filterBy("Africa");
              setActive(false);
            }}
          >
            Africa
          </p>
          <p
            className="option"
            onClick={() => {
              filterBy("Americas");
              setActive(false);
            }}
          >
            Americas
          </p>
          <p
            className="option"
            onClick={() => {
              filterBy("Asia");
              setActive(false);
            }}
          >
            Asia
          </p>
          <p
            className="option"
            onClick={() => {
              filterBy("Europe");
              setActive(false);
            }}
          >
            Europe
          </p>
          <p
            className="option"
            onClick={() => {
              filterBy("Oceania");
              setActive(false);
            }}
          >
            Oceania
          </p>
        </div>
      </div>
    </section>
  );
};

export default Search;
