import React from "react";
import produto from "../data/produtoCor"
import './TabelaProdutos.css'

export default (props) => {

    function getLinhas() {
        return produto.map((produto, i) => {
            return (
                <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.valor.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }
    return (
        <div className="TabelaProdutos" >
            
            <table border={"1"}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody> {getLinhas()}</tbody>
            </table>
        </div>
    )
}