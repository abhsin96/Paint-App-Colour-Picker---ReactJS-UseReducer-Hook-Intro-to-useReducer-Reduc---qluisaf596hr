import React, { useState } from "react";

function Selection({nextBackground,applyColor}){
    const [color, setColor] = useState({})

    return <div className="ifx-box" style={color} onClick={()=>setColor(nextBackground)}>
        <h2 className="subheading">Selection</h2>
    </div>
}

export default Selection