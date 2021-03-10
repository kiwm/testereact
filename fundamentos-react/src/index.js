import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'


ReactDOM.render(
<div> 
    <Primeiro></Primeiro>
    <ComParametro
    titulo="segundo Componente"
    aluno="Muito legal!"
    nota="9.3"
    /> 
</div>, 
document.getElementById('root')
)


