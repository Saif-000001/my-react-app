// Update object in state
import React, {useState} from "react";

function UpdateObject (){
    const [car, setCar] = useState({year:2024, make:"Ford", model:"Mustang"})

    const handelYearChange = (event) =>{
        setCar(e=>({...e, year: event.target.value}))
    }

    const handelMakeChange = (event) =>{
        setCar(e =>({...e, make: event.target.value}))
    }

    const handelModelChange = (event) =>{
        setCar(e =>({...e, model: event.target.value}))
    }

    return(
        <div>
            <p>My favorite car is: {car.year} {car.make} {car.model} </p>
            <input type="number" value={car.year} onChange={handelYearChange}/><br />
            <input type="text" value={car.make} onChange={handelMakeChange} /><br />
            <input type="text" value={car.model} onChange={handelModelChange} />
        </div>
  
    );

}

export default UpdateObject;