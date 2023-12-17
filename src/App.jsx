import React from "react"
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"
import './App.css'
import Familia from "./components/basicos/Familia"
import MembroFamilia from "./components/basicos/MembroFamilia"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import TabelaProdutosCor from "./components/repeticao/TabelaProdutosCor"
import ParOuImpar from "./components/condicinal/ParOuImpar"
import UsuarioInfo from "./components/condicinal/UsuarioInfo"
//import If from "./components/condicinal/If"
import DiretaPai from "./components/comunicacao/DiretaPai"
//import IndiretaFilho from "./components/comunicacao/IndiretaFilho"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input"
import Contador from "./components/contador/Contador"
import Mega from "./components/mega/Mega"

export default () => {
    return (
        <div className="App">
            <h1 style={{ backgroundColor: '#ff5500 ' }}>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#01 - Primeiro" color="#ff4912 ">
                    <h3 style={{ background: '#ff9b4f' }}>PRIMEIRO COMPONENTE</h3>
                    <Primeiro />
                </Card>
                <Card titulo="#02 - Com Parâmetro" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>PARÂMETRO</h3>
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Legal" />
                </Card>
                <Card titulo="#03 - Fragmento" color="#ff4912 ">
                    <h3 style={{ background: '#ff9b4f' }}>FRAGMENTO</h3>
                    <Fragmento />
                </Card>
                <Card titulo="#04 - Desafio Aleatório #01" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>DESAFIO VALOR ALEATÓRIO</h3>
                    <Aleatorio min={1} max={60} />
                </Card>
                <Card titulo="#05 - Componente com Filhos #01" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>FAMÍLIA</h3>
                    <Familia sobrenome="Ferreira">
                        <MembroFamilia nome="Pedro" />
                        <MembroFamilia nome="Ana" />
                        <MembroFamilia nome="Maria" />
                    </Familia>
                </Card>
                <Card titulo="#06 - Componente com Filhos #02" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>LISTA DE ALUNOS/NOTA</h3>
                    <ListaAlunos />
                </Card>
                <Card titulo="#07 - Desafio Tabela #02" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>DESAFIO PRODUTO</h3>
                    <TabelaProdutos />
                </Card>
                <Card titulo="#07 - Desafio Tabela Correção #02" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}> TABELA CORREÇÃO</h3>
                    <TabelaProdutosCor />
                </Card>
                <Card titulo="#08 - Renderização Condicional #01" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>PAR OU ÍMPAR</h3>
                    <ParOuImpar numero={20} />
                </Card>
                <Card titulo="#09 - Renderização Condicional #02" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>IF-ELSE | ?-: </h3>
                    <UsuarioInfo usuario={{ nome: 'Maria' }} />
                    <UsuarioInfo usuario={{ nome: '' }} />
                </Card>
                <Card titulo="#10 - Comunicação Direta" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>COMUNICAÇÃO DIRETA</h3>
                    <DiretaPai />
                </Card>
                <Card titulo="#11 - Comunicação Indireta" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>COMUNICAÇÃO INDIRETA</h3>
                    <IndiretaPai />
                </Card>
                <Card titulo="#12 - Componente Controlado" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>COMPONENTE CONTROLADO</h3>
                    <Input />
                </Card>
                <Card titulo="#13 - Contador" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>CONTADOR</h3>
                    <Contador numeroInicial={10} />
                </Card>
                <Card titulo="#14 - Desafio MegaSena #03" color="#ff4912">
                    <h3 style={{ background: '#ff9b4f' }}>DESAFIO MEGA SENA</h3>
                    <Mega />
                </Card>
            </div>
        </div>
    )
} 