import React from "react";

const ObtenerBandera = (props) => {
    function obtenerBandera() {
        //crea numeri aleatorio entre 0 y 220 para obtener una bandera aleatoria
        //setea a country por el pais y muestra en el img la imagen de la bandera
        var x = Math.random()*220;
        props.setCountry(props.countries.data[x])
    }
    return (
        <div>
        <img src={props.country.flag} alt="Bandera" />
        </div>
    );
}

export default ObtenerBandera;