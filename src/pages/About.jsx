import React from 'react'
import '../index.css'
import countryData from "../api/WorldData.json"

function About() {
  return (
    <div className="container">
            <h1 className="title">🌍 World Facts</h1>
            <div className="card-grid" >
      {countryData.map((countryInfo) => {

       const {id, country, capital, population, fact} = countryInfo;

return(

  
  <div className="card" key={id}>
      <h2>{country}</h2>
      <h4>Capital: {capital}</h4>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p className="fact">{fact}</p>
  </div>
 


);

      })}

</div>    
               
            </div>
       
  )
}

export default About
