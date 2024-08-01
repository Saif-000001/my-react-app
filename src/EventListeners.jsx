// useEffect (function , [dependencies])

import React, {useState, useEffect} from "react";

function EventListeners (){
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() =>{
        window.addEventListener("resize", handelResize)
        console.log("EVENT LISTENER ADDED")

        return () =>{
            window.removeEventListener("resize", handelResize)
            console.log("EVENT LISTENER REMOVE")
        }
    }, [])

    useEffect(()=> {
        document.title = `Size: ${width} x ${height}`
    }, [width, height])
        
    const handelResize = () =>{
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(<>
        <p>Window width: {width}px</p>
        <p>Window height: {height}px</p>
    </>)
}

export default EventListeners;