// Update array in state
import React, {useState} from "react";
import Food from "./Food";

function UpdateArray (){
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    const handelAddFood = () =>{
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""
        // setFoods(["Apple", "Orange", "Banana", newFood]) // this line raplce down given
        setFoods(f =>([...f, newFood]))
    }

    const handelRemoveFood = (index) =>{
        setFoods(foods.filter((_,i) => i!==index))
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index)=> <li key={index} onClick={() => handelRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handelAddFood}>Add Food</button>
        </div>
    );

}

export default UpdateArray;