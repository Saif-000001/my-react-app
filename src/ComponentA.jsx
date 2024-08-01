// props drilling
/* import ComponentB from "./ComponentB";
import React, {useStatet} from "react";


function ComponentA(){
    const [user, setUser] = useState("Saif")
    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h3>{`Hello ${user}`}</h3>
            <ComponentB user={user}/>
        </div>
    );
}
export default ComponentA; */



import ComponentB from "./ComponentB";
import React, {useState, createContext} from "react";

export const  UserContext = createContext();

function ComponentA(){
    const [user, setUser] = useState("Saif")
    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h3>{`Hello ${user}`}</h3>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    );
}
export default ComponentA;