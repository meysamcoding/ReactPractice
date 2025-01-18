import React, { useState } from 'react'

 const FilterName = () => {

    const [names] = useState([
        "Alice",
        'Ali',
        'behroz',
        "Bob",
        "Charlie",
        "David",
        "Eve",
        "Frank",
        "Grace",
        "Hannah",
        "Isaac",
        "Jack",
        "Karen",
        "Liam",
        "Mia",
        "Noah",
        "Olivia",
        "Paul",
        "Quincy",
        "Rachel",
        "Sophia",
        "Thomas",
        "Uma",
        "Victor",
        "Wendy",
        "Xander",
        "Yara",
        "Zach"
      ]);
      const [searchTerm, setSearchterm] = useState([]);
    //   const [nameSearch, setNameSearch] = useState([]);
    //   const hanldeChange = (e) => {
    //     const value =  e.target.value
    //     setSearchterm(value)
    //     console.log('meysam',value)
    //     if(value.length > 0) {
    //         const filtered = names.filter((item) => item.toLowerCase().startsWith(value.toLowerCase()))
    //         console.log('meysam 1', filtered)
    //         setNameSearch(filtered)
    //     } else {
    //         setNameSearch(names)
    //     }
        
    //   }

  return (
   <> 
   {/* <input type='search' value={searchTerm} placeholder='search' onChange={(e) => hanldeChange(e)}/> */}
   {
    <div>
        {names.sort((a, b) => b.localeCompare(a)).map((item) => <p>{item}</p>)}
    </div>
   }
   
    {/* <div>{nameSearch.length > 0 ? nameSearch.map((item) => <ul><li>{item}</li></ul>) : names.map((item) => <ul><li>{item}</li></ul>)}</div> */}
   </>
   
  )
}


export default FilterName;