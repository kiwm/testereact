import React from 'react'

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Fragmento from './components/basicos/Fragmento'

export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#04 Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={2} max={10}></Aleatorio>
            </Card>

            <Card titulo="#03 Fragmento" color="#E94C6F">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 Com Parametro" color="#F2AE72">
                <ComParametro
                    titulo="Situacao do Aluno"
                    aluno="Muito legal! "
                    nota="9.3"
                />
            </Card>

            <Card titulo="#01 Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>

