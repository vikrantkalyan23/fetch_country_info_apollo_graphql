import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../queries";

const CountryList = ({ onCountrySelect }) => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.countries.map((country) => (
        <li key={country.code}>
          {country.name} {country.emoji}
          <button onClick={() => onCountrySelect(country.code)}>
            Details
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
