import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome='Ludmila' idade={25} nerd={true}/>
            <DiretaFilho nome='Letícia' idade={19} nerd={false}/>
        </div>
    )
}