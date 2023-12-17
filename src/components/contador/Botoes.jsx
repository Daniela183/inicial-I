import { React } from "react";

export default props => {
    return (
        <div>
            <button onClick={props.decre}> - </button>
            <button onClick={props.cresc}> + </button>
        </div>
    )
}