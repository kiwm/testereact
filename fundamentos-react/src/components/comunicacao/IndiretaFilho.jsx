import React from 'react'

export default props => {

    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            Filho
            <div>
                <button onClick={
                    function (e) {
                        props.quandoClicar('Joao', gerarIdade(), gerarNerd())
                    }
                }>
                    Fornecer Informacoes</button>
            </div>
        </div>
    )
}