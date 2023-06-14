import React from "react";
import Card from "./Card";

const SearchList = ({ countries, isLoading, showCountry }) => {
  // Show lodaing message if data is not ready yet
  if (isLoading)
    return (
      <p style={{ justifySelf: "center", fontSize: "1.5em", marginTop: "3em" }}>
        Loading...
      </p>
    );

  // Show not found message if no country matched the search criteria
  if (countries.length === 0)
    return (
      <p style={{ justifySelf: "center", fontSize: "1.5em", marginTop: "3em" }}>
        Not Found...
      </p>
    );

  return (
    <section className="search-list grid-flow">
      {countries.map(({ name, flags, population, region, capital }) => (
        <Card
          name={name.common}
          img={flags}
          population={population}
          region={region}
          capital={capital[0]}
          showCountry={showCountry}
          key={name.common}
        />
      ))}
    </section>
  );
};

export default SearchList;
