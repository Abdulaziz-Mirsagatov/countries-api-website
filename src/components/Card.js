import React from "react";

const Card = ({ name, img, population, region, capital, showCountry }) => {
  return (
    <div className="card grid-flow element" onClick={() => showCountry(name)}>
      <img src={img.svg} alt={img.alt} />
      <div className="container">
        <h2 className="title">{name}</h2>
        <div className="info-container grid-flow">
          <p>
            <span>Population:</span> {population}
          </p>
          <p>
            <span>Region:</span> {region}
          </p>
          <p>
            <span>Capital:</span> {capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
