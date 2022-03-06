import React from 'react';
import Banner from '../Banner';
import beer from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png';
import newBeer from '../../assets/new-beer.png'

const pages = [
    {image: beer,
     title: 'All Beers',
     description: 'lorem ',
     url: '/beer-list'
    },
    {image: randomBeer,
     title: 'Random Beer',
     description: 'lorem ',
     url: '/random-beer'
    },
    {image: newBeer,
     title: 'New Beer',
     description: 'lorem ',
     url: '/new-beer'
    }
]

function HomePage() {
  return (
    <div>
        <h2>HomePage</h2>
        {pages.map((page, index) => {
            return (
                <Banner key={index} banner={page} />
            )
        })}
         
    </div>
  )
}

export default HomePage