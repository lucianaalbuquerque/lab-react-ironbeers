import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';

function BeerList() {
    const [beerList, setBeerList] = useState([])
    const [renderedBeer, setRenderedBeer] = useState([])
    const [isBeerArrEmpty, setIsBeerArrEmpty] = useState(false)

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((res) => setBeerList(res.data))
        .catch((err) => console.log(err))
    }, [])

    const searchFilter = (query) => {
        let searchedBeerArr = beerList.filter((beer) => {
            return (beer.name.toLowerCase().includes(query.toLowerCase()))
        })
        if (searchedBeerArr.length === 0 ) {
            setIsBeerArrEmpty(true)
        }
        setRenderedBeer(searchedBeerArr)
    }

  return (
    <div>
        <Navbar />
        <h2>BeerList</h2>
        <SearchBar filterList={searchFilter} />
        <div className="beerList">
        { isBeerArrEmpty ? <p>Beer not found</p>
        :   beerList.map((beer) => {
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