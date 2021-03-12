import React from 'react'

import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Fragmento from './components/basicos/Fragmento'
import Familha from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/comdicional/ParouImpar'

export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#07 Repeticao Produto" color="#F0A830">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo="#06 Repeticao" color="#59C4C5">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 Componente com Filhos" color="#FF4C65">
                <Familha sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro " ></FamiliaMembro>
                    <FamiliaMembro nome="Maria " ></FamiliaMembro>
                    <FamiliaMembro nome="jose " ></FamiliaMembro>
                </Familha>
            </Card>

            <Card titulo="#04 Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={2} max={10}></Aleatorio>
            </Card>

            <Card titulo="#03 Fragmento" color="#E94C6F">
                <div>
                    <Fragmento></Fragmento>
                </div>
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

