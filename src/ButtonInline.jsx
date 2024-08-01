// add css style
import React from "react";
function ButtonInline(){
    const styles = {
        backgroundColor:" hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer "
    }
    return(
        <button style={styles}>click me inline</button>
    );
}

export default ButtonInline;