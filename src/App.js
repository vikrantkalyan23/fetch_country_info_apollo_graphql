import React, { useState } from "react";
import CountryList from "./components/CountryList";
import CountryDetails from "./components/CountryDetails";

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div>
      <h1>Countries App</h1>
      {selectedCountry ? (
        <CountryDetails
          countryCode={selectedCountry}
          onBack={() => setSelectedCountry(null)}
        />
      ) : (
        <CountryList onCountrySelect={setSelectedCountry} />
      )}
    </div>
  );
};

export default App;
