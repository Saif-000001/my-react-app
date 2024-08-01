import React, {useState} from "react";

function UpdateArrayObject (){

    const [cars, setCar] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    const handelAddCar = () =>{
        const newCar = {year: carYear, make: carMake, model: carMake};
        setCar(c =>([...c, newCar]));


        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    const handelRemoveCoar = (index) =>{
        setCar(cars.filter((_,i)=> i!==index));
    }

    const handelYearChange = (event) =>{
        setCarYear(event.target.value);
    }

    const handelMakeChange = (event) =>{
        setCarMake(event.target.value);
    }

    const handelModelChange = (event) =>{
        setCarModel(event.target.value);
    }
    return(
        <div>
            <h2>List of car object</h2>
            <ul>
                {cars.map((car, index) => <li key={index} onClick={() => handelRemoveCoar(index)}>{car.year} {car.make} {car.model}</li>)}
            </ul>
            <input type="number" value={carYear} onChange={handelYearChange} placeholder="Enter car year"/><br />
            <input type="text" value={carMake} onChange={handelMakeChange} placeholder="Enter car make"/><br />
            <input type="text" value={carModel} onChange={handelModelChange} placeholder="Enter car model"/><br />
            <button onClick={handelAddCar}>Add Car</button>
        </div>
    );
}

export default UpdateArrayObject;