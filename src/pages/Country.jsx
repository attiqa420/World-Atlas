import React, {useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/PostApi";
import '../index.css';
import SeacrhFilter from "../components/UI/SeacrhFilter";

function Country() {

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState();
  

  const [isPending, startTransition] = useTransition();

  const fetchCountries = async () => {
    try {
      const response = await getCountryData();
      // Mark the state update as low priority
      startTransition(() => {
        setCountries(response.data);
      });
    } catch (err) {
      setError("Failed to load countries");
    }
  };

 
  useEffect(() => {
    fetchCountries();
  }, []);

  if (error) return <p>{error}</p>;

  const searchCountry = (country) =>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    if (!search) return true;
  }

  const filteredCountries = countries.filter((country) => searchCountry(country));

  return (
    <div>
      {isPending && <p>Loading countries...</p>}

      <div className="container">

      <SeacrhFilter
       search={search} setSearch={setSearch}   
       />
       <div className="card-grid">
          {filteredCountries.map((country) => (
            <div key={country.cca3} className="card"> 
              <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
              <h3>{country.name.common}</h3>
              <p><strong>Capital:</strong> {country.capital?.[0]}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Population:</strong> {country.population}</p>  
      </div>
         ))}
         </div>
    </div>
    </div>
  )
}

export default Country
