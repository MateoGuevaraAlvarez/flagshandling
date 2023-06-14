import './App.css';
import { useState,useEffect } from 'react';
import Obtenerbandera from './components/obtenerbandera';
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then(res => res.json())
    .then(res => {
      setCountries(res.data);
      const x = Math.floor(Math.random()*220)
      setCountry(res.data[x])
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      <Obtenerbandera countries={countries} country={country} setCountry={setCountry}/>
    </div>
  );
}

export default App;
