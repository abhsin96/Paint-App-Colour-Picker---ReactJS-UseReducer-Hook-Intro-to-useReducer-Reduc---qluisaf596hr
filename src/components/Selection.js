import React, { useState } from "react";

function Selection({applyColor}){
    const [color, setColor] = useState({})

    return <div className="ifx-box" style={color} onClick={()=>applyColor(setColor)}>
        <h2 className="subheading">Selection</h2>
    </div>
}

export default Selection