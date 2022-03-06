import React from 'react';
import {Link} from 'react-router-dom'


function Banner(props) {
    const {banner} = props;
    
  return (
    <div className='banner'>
        <img src={banner.image} alt="beers" />
        <Link to={banner.url}><h3>{banner.title}</h3></Link>
        <p>{banner.description}</p>
    </div>
  )
}

export default Banner