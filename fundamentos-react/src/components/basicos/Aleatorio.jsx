import React from 'react'

export default (props) => {
    const resultado = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min
    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <p>Valor minimo: {props.min}</p> 
            <p>Valor maximo: {props.max}</p> 
            <br></br>
            <strong>Resultado: {resultado}</strong>
        </div>
    )
}


