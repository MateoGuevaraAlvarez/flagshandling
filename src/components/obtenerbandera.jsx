import React, { useState } from "react";

const ObtenerBandera = (props) => {
    const [ingreso, setIngreso] = useState('')

    const handleInputIngreso = (e) => {
        setIngreso(e.target.value)
    }
    function comparar() {
        console.log(ingreso, props.country.name)
        if (ingreso.toLowerCase() === props.country.name.toLowerCase()) {
            props.setPuntos(props.puntos + 10);
            props.setCountry(props.countries[Math.floor(Math.random() * 220)])
            setIngreso('')
        }
        else {
            console.log("ingreso incorrecto")
            props.setPuntos(props.puntos - 1);
        }
    }
    return (
        <div>
            {props.country && ( <img src={props.country.flag} alt="Bandera" style={{ width: 500 }} />)}
            <br />
            <input onChange={handleInputIngreso} placeholder="bandera" style={{ marginTop: '10px' }}/>
            <button onClick={comparar} style={{padding: '10px 20px',backgroundColor: 'blue',color: 'white',borderRadius: '5px',fontSize: '16px',cursor: 'pointer',}}>OK!</button>
            <p style={{ fontSize: '18px' }}>Puntuacion : {props.puntos}</p>
        </div>
    )
}

export default ObtenerBandera;