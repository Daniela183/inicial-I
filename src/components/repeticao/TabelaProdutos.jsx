import React from "react";
import produto from "../data/produto"


export default (props) => {
    const lis = (
        <li>
            {produto[0].id} {produto[0].nome} - {produto[0].nota}
        </li>
    )

    const listProduto = produto.map((produto) => {
        return (
            <li key={produto.id}>
                {produto.id}) {produto.nome} - {produto.valor}</li>
        )
    })
    return (
        <div> 
            <ul style={{ listStyle: "none" }}>
                {listProduto}
            </ul>
        </div>
    )
}