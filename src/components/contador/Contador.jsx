import React from "react";
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";
import './Contador.css'

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.numeroIniciale || 5,
    }

    cre = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }
    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }
    render() {
        return (
            <div className="Contador">
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}/>
                <Botoes cresc={this.cre} decre={this.dec} />
            </div>
        )
    }
}

{/*import react,{Component} from react 
class Contador extends Component{
    render(){
        return(
            <div>
                <h2>Contador</h2>
            </div>
        )
    }}
export default Contador*/}