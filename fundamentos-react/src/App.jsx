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
import UsuarioInfo from './components/comdicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'

export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#12 Contador" color="#5BB12F">
                <Contador numeroInicial={10}></Contador>
            </Card>

            <Card titulo="#11 Componente Controlado" color="#4298B5">
                <Input></Input>
            </Card>

            <Card titulo="#10 Comunicacao Indireta" color="#E1D041">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 Comunicacao Direta" color="##FF85CB">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 Renderizacao Condicional" color="#6E9ECF">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'jose' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'maria@hotmail.com' }}></UsuarioInfo>
            </Card>

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

