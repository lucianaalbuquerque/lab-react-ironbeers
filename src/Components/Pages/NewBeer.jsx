import axios from 'axios';
import {useState} from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../Navbar';

function NewBeer() {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [brewerTips, setBrewerTips] = useState('')
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {name, tagline, description, firstBrewed, brewerTips, attenuationLevel, contributedBy}

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
    .then((response) => {
      setName('')
      setTagline('')
      setDescription('')
      setFirstBrewed('')
      setBrewerTips('')
      setAttenuationLevel(0)
      setContributedBy('')
      Navigate('/beer-list')
    })
    .catch((err) => {
      console.log(err)
      Navigate('/new-beer')
    })
  } 

  return (
    <div>
        <Navbar />
        <h2>Add a New Beer</h2>

        <form onSubmit={handleSubmit} >

          <label htmlFor='name'>Name</label>
          <input type='text' onChange={(e) => setName(e.target.value)}/>
          <label htmlFor='tagline'>Tagline</label>
          <input type='text' onChange={(e) => setTagline(e.target.value)} />
          <label htmlFor='description'>Description</label>
          <input type='text' onChange={(e) => setDescription(e.target.value)} />
          <label htmlFor='first_brewed'>First Brewed</label>
          <input type='text' onChange={(e) => setFirstBrewed(e.target.value)} />
          <label htmlFor='brewer_tips'>Brewer Tips</label>
          <input type='text' onChange={(e) => setBrewerTips(e.target.value)} />
          <label htmlFor='attenuation_level'>Attenuation Level</label>
          <input type='number' onChange={(e) => setAttenuationLevel(e.target.value)} />
          <label htmlFor='contributed_by'>Contributed By</label>
          <input type='text' onChange={(e) => setContributedBy(e.target.value)} />

          <button>Send</button>
        </form>

    </div>
  )
}

export default NewBeer