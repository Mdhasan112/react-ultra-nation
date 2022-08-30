import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
    
  }, [])
  return (
    <div className="App">
      <h2>Country loaded: {countries.length}</h2>
      
        {
          countries.map(country => <Country country = {country} key = {country.flag} ></Country>)
        }
      
    </div>
  );
}

export default App;
