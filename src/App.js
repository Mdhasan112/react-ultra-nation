import logo from './logo.svg';
import './App.css';
import { createRef, useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([])
  const[cart, setCart] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
    
  }, [])
  const handleAddedCountry = (country) => {
    const newCart = [...cart, country]
    setCart(newCart)
  }

  return (
    <div className="App">
      <h2>Country loaded: {countries.length}</h2>
      <h4>Added Country: {cart.length}</h4>
      
        {
          countries.map(country => <Country country = {country} handleAddedCountry = {handleAddedCountry} key = {country.flag} ></Country>)
        }
      
    </div>
  );
}

export default App;
