import React from "react";

const Country = ({ countries, unShowCountry }) => {
  const country = countries[0];
  // make languages object into languages array
  const languages = Object.keys(country.languages).map(
    (key) => country.languages[key]
  );

  return (
    <section className="country-page grid-flow">
      <button className="btn back-btn element" onClick={unShowCountry}>
        <i className="fa fa-arrow-left"></i>
        Back
      </button>

      <div className="container grid-flow">
        <img src={country.flags.svg} alt={country.flags.alt} />
        <div className="info-container">
          <h2 className="title">{country.name.common}</h2>
          <div className="main-info-box flexbox">
            <div className="left grid-flow">
              <p>
                <span>Native Name:</span>{" "}
                {
                  country.name.nativeName[
                    Object.keys(country.name.nativeName)[0]
                  ].official
                }
              </p>
              <p>
                <span>Population:</span> {country.population}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Sub Region:</span> {country.subregion}
              </p>
              <p>
                <span>Capital:</span> {country.capital}
              </p>
            </div>
            <div className="right grid-flow">
              <p>
                <span>Currencies:</span>{" "}
                {country.currencies[Object.keys(country.currencies)[0]].name}
              </p>
              <p>
                <span>Languages:</span>
                {" " + languages.join(", ")}
              </p>
            </div>
          </div>
          <div className="extra-info-box flexbox">
            <h3>Border Countries: </h3>
            <div className="border-countries flexbox">
              {country.borders.map((borderCountry) => (
                <div className="element">{borderCountry}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Country;
