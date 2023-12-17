import React from "react";

export default (props) => {
    const isPar = props.numero % 2 === 0
    return (
        <div> 
            {isPar ? 'O número é Par' : 'O número é Ímpar'}
           {/*{isPar ? <span>Par</span> : <span>Ímpar</span>}*/} 
        </div>
    )
}