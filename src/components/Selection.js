import React, { useState } from "react";

function Selection({applyColor}){
    const [state, setState] = useState({background:''})
    console.log(color)
    return <div className="ifx-box" style={state} onClick={()=>applyColor(setState)}>
        <h2 className="subheading">Selection</h2>
    </div>
}

export default Selection
