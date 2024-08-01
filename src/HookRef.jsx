import React, {useEffect, useRef} from "react";

function HookRef(){
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=>{
        console.log("Component Rendered")
    });

    const handleCick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    const handleCick2 = () =>{
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
        
    }

    const handleCick3 = () =>{
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
        
    }

    return(
        <div>
            <button onClick={handleCick1}>
                Click me 1!
            </button>
            <input ref={inputRef1} /> <br />
            <button onClick={handleCick2}>
                Click me 2!
            </button>
            <input ref={inputRef2} /> <br />
            <button onClick={handleCick3}>
                Click me 3!
            </button>
            <input ref={inputRef3} />
        </div>
    );

}

export default HookRef;