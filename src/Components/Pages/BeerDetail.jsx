import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

import Navbar from '../Navbar'



function BeerDetail() {
    const [beer, setBeer] = useState(null);
    const { id } = useParams();
    
    const fetchData = async () => {
        try { 
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
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

export default BeerDetail