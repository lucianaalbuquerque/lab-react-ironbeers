import { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from '../Navbar'



function RandomBeer() {
    const [beer, setBeer] = useState(null);
    
    const fetchData = async () => {
        try { 
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            setBeer(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(beer)

  return (
    <div>
        <Navbar />
        { beer && (
            <>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.name}</p> 
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>Created by: {beer.contributed_by}</p>
            </>
        )}
    </div>
  )
}

export default RandomBeer