import React from 'react'
import If, { Else } from './If'

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                <div>
                    seja bem vindo! <strong>{usuario.nome}</strong>
                </div>

                <Else>
                    <div>
                        seja bem vindo! <strong>Amigao</strong>
                    </div>
                </Else>
            </If>
        </div>
    )
}