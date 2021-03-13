import React from 'react'

export default props => {
    return (
        <div>
            Filho
            <div>
                <button onClick={
                    function (e) {
                        props.quandoClicar('Joao', 42, true)
                    }
                }>
                    Fornecer Informacoes</button>
            </div>
        </div>
    )
}