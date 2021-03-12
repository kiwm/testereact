import React from 'react'
import lista from '../../data/produto'
import './TabelaProdutos.css'

export default () => {

    const produtoLista = lista.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td><td>{produto.nome}</td><td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>id:</th><th>nome:</th><th>preco:</th>
                    </tr>
                </thead>
                <tbody>
                    {produtoLista}
                </tbody>
            </table>
        </div>
    )

}
