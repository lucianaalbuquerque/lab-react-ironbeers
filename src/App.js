import './App.css';
import {Routes, Route} from 'react-router-dom'

import HomePage from './Components/Pages/HomePage'; 
import BeerList from './Components/Pages/BeerList';
import BeerDetail from './Components/Pages/BeerDetail';
import NewBeer from './Components/Pages/NewBeer';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beer-list" element={<BeerList />} />
          <Route path="/beers/:id" element={<BeerDetail  /> } />
          <Route path="/random-beer" element={<BeerDetail /> } />
          <Route path="/new-beer" element={<NewBeer  /> } />
      </Routes>
    </div>
  );
}

export default App;
