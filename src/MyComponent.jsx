// useState Hook

import React, {useState} from "react";

function MyComponent (){
    const [name, setName] = useState("Gust")
    const [age, setAge] = useState(0)
    const [isEmplay, setIsEmplay] = useState(false)
    
    const updateName = () =>{
        setName("Saif")
    }

    const incrementAge = () =>{
        setAge(age+2)
    }

    const toggleEmaplyStatus = () =>{
        setIsEmplay(!isEmplay)
    }

    return(<>
            <p>Name: {name}</p>
            <button onClick={updateName}>set name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>isEmplay: {isEmplay ? "Yes" : "No"}</p>
            <button onClick={toggleEmaplyStatus}>Toggole Status</button>
          </>);
}

export default MyComponent;