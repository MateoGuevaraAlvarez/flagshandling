import React from "react";

const ObtenerBandera = (props) => {

    const newFlag = () => {
        
    }    
    
    return (
        <div>
        {props.country && <img src={props.country.flag} alt="Bandera" /> }
        </div>
    );
}

export default ObtenerBandera;