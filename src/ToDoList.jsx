import React, {useState} from "react";

function ToDoList(){
    const [tasks, setTasks] = useState(["Eat BreackFast", "Take Shower", "Walk the dog"])
    const [newTask, setNewTask] = useState("")

    const handelInputChange = (event) =>{
        setNewTask(event.target.value);
    }
    const addTask = () =>{
        if(newTask.trim() !==""){
            setTasks((t) => ([...t, newTask]));
            setNewTask("");
        }

    }

    const deletTask = (index) =>{
        const updatedTask = tasks.filter((_,i)=> i!==index)
        setTasks(updatedTask)
    }

    const moveTaskUp = (index) =>{
        if(index > 0){
            const updatedTask = [...tasks]
            [updatedTask[index], updatedTask[index-1]] = 
            [updatedTask[index-1], updatedTask[index]]
            setTasks(updatedTask)
        }
    }

    const moveTaskDown = (index) =>{
        if(index < tasks.length-1){
            const updateTask = [...tasks]
            [updateTask[index], updateTask[index+1]] = 
            [updateTask[index+1], updateTask[index]]
            setTasks(updateTask)
        }
    }


    return ( 
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input type="text" value={newTask} onChange={handelInputChange} placeholder="Enter a task..."/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deletTask(index)}>Delete</button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
                </li>
                )}
            </ol>
           
        </div>
    );

}
export default ToDoList;