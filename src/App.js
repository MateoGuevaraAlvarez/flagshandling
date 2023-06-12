import './App.css';
import { useState } from 'react';
import Obtenerbandera from './components/obtenerbandera';
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
    .then(res => res.json())
    .then(res => {
      //da un error que logea todo el tiempo(No se porque)
      setCountries(res.data);
    })
  return (
    <div className="App">
      <h1>React App</h1>
      <Obtenerbandera countries={countries} country={country} setCountry={setCountry}/>
    </div>
  );
}

export default App;
