import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';

function BeerList() {
    const [beerList, setBeerList] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) => setBeerList(res.data))
        .catch((err) => console.log(err))
    }, [])

  return (
    <div>
        <Navbar />
        <h2>BeerList</h2>
        <div className="beerList">
        {beerList.map((beer) => {
            return (
                <div key={beer._id} className="beer-row">
                    <img src={beer.image_url} alt={beer.name} />
                    <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
                    <p>{beer.tagline}</p>
                    <p>Created by: {beer.contributed_by}</p>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default BeerList