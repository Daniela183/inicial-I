import { React, useState } from "react";

export default props => {
    const [valor, setValor] = useState('Inicial')

    function mudar(e){
        setValor(e.target.value)
    }
    return (
        <div className="Input">
            <input value={valor} onChange={mudar} />
        </div>
    )
}