import axios from 'axios'
import { useState } from 'react'

function SearchBar() {
    const [query, setQuery] = useState('')

    const handleSearch = ({filterList}) => {
        /* (e) => setQuery(e.target.value)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q={query}`)
        .then((response) => filterList(query))
        .catch((err) => console.log(err)) */
    }

  return (
    <div>
        <h2>Search</h2>
        <input type='text' onChange={handleSearch}></input>
    </div>
  )
}

export default SearchBar