import React, {useState, useEffect} from "react";

function HookUseEffect(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    // document.title = `Count: ${count}`

    // Runs after every re-render 
    // useEffect(()=>{ 
    //     document.title = `Count: ${count}`
    // })

    // Runs only on mount
    // useEffect(()=>{
    //     document.title = `Count: ${count}`
    // }, [])

    // Runs on mount + when value changes
    useEffect(() =>{
        document.title = `Count: ${count} ${color}`
        
        return () =>{
            // some clean up code
        }
    }, [count, color])

    const addCount = () =>{
        setCount((c) => c + 1)
    }

    const subtractCount = () => {
        setCount((c) => c - 1)
    }

    const changeColor = () =>{
        setColor(c => c === 'green' ? 'red' : 'green' )
    }

    return(<div>
        <h2 style={{color: color}}>Count: {count}</h2>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button><br />
        <button onClick={changeColor}>Change Color</button>
    </div>);
}

export default HookUseEffect;