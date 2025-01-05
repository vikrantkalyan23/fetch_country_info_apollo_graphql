import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_DETAILS } from "../queries";

const CountryDetails = ({ countryCode, onBack }) => {
  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables: { code: countryCode },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { country } = data;

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h2>{country.name} {country.emoji}</h2>
      <p>Capital: {country.capital}</p>
      <p>Currency: {country.currency}</p>
      <p>Languages: {country.languages.map((lang) => lang.name).join(", ")}</p>
    </div>
  );
};

export default CountryDetails;
