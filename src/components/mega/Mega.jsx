import { useState } from "react";
import './Mega.css'

export default (props) => {
    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max - min)) + min;
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)
        return numeros
    }
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numeroInicial = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numeroInicial)

    return (
        <div className="Mega">
            <h2>Números Mega Sena </h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de Números</label>
                <input min="6" max="12" type="number" value={qtde}
                    onChange={e => setQtde(+e.target.value)} />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar Números</button>
        </div>
    )
}