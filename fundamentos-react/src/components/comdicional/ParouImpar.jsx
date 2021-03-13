import React from 'react'

export default porps => {
    const isPar = porps.numero % 2 === 0
    return (
        <div>
            {isPar ? <span>Par</span> : <span>Impar</span>}

        </div>
    )
}