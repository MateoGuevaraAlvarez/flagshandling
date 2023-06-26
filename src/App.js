import './App.css';
import { useState,useEffect } from 'react';
import ObtenerBandera from './components/ObtenerBandera';
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [puntos, setPuntos] = useState (0)
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
    <div className="App" >
      <h1>Adivina la bandera</h1>
      <ObtenerBandera countries={countries} country={country} setCountry={setCountry} puntos = {puntos} setPuntos={setPuntos}/>
    </div>
  );
}

export default App;
