import React, { cloneElement } from "react"



export default props => {
    return (
        <div>
            {/*{React.cloneElement(props.children, props)}*/}
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i })
            })
            }
        </div>
    )
} 