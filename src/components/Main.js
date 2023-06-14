import React, { useState, useEffect } from "react";
import Search from "./Search";
import SearchList from "./SearchList";
import Country from "./Country";

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,currencies,languages,borders"
    )
      .then((response) => response.json())
      .then((data) => {
        // If there is search for country
        if (searchCountry)
          data = data.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(searchCountry.toLowerCase())
          );

        // If filter is applied based on region
        if (region) data = data.filter((country) => country.region === region);

        // If a country card is clicked
        if (countryName)
          data = data.filter(
            (country) =>
              country.name.common.toLowerCase() === countryName.toLowerCase()
          );

        setCountries(data);
        setIsLoading(false);
      });
  }, [searchCountry, region, countryName]);

  // Show country page if a country card is clicked
  if (countryName)
    return (
      <main className="main grid-flow">
        <Country
          countries={countries}
          unShowCountry={() => setCountryName("")}
        />
      </main>
    );

  return (
    <main className="main grid-flow">
      <Search
        searchCountry={searchCountry}
        handleChange={(value) => setSearchCountry(value)}
        filterBy={(region) => {
          setRegion(region);
        }}
        region={region}
      />
      <SearchList
        countries={countries}
        isLoading={isLoading}
        showCountry={(name) => setCountryName(name)}
      />
    </main>
  );
};

export default Main;
