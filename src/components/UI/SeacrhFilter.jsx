import React from 'react'

function SeacrhFilter({search, setSearch, filter, setFilter}) {

    const handleInputChange = (event) =>{

        setSearch(event.target.value);


    };
    
  return (
    <>
      <section>
        
        <input className='search-filter' type='text' placeholder='Search' value={search} onChange={handleInputChange}
        />
        
        </section> 
    </>
  )
}

export default SeacrhFilter
