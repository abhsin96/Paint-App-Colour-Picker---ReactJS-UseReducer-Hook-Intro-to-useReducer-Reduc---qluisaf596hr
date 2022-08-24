import React, { useState } from "react";

function Selection({applyColor}){
    const [color, setColor] = useState({})
    console.log(color)
    return <div className="ifx-box" style={color || {background: ""}} onClick={()=>applyColor(setColor)}>
        <h2 className="subheading">Selection</h2>
    </div>
}

export default Selection