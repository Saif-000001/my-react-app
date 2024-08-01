// Click event

import React from "react";

function Button () {

    // const handelClick = () => console.log("Yaho! this is me")
    // return ( <button onClick={handelClick}>click me</button> );

    // const handelClick = (name) => console.log(`${name} stop clicking me`)
    // return(<button onClick={() =>handelClick("Saif")}>click me</button>)

    // let count = 0;
    // const handelClick = (name) =>{
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} click me ${count} time/s`)
            
    //     }else{
    //         console.log(`${name} stop clicking me!`)
    //     }
    // }
    // return(<button onClick={() => handelClick("Saif")}>click me</button>)

    // Even parameter
    // const handelClick = (e) => console.log(e);
    // return(<button onClick={(e) => handelClick(e)}>click me</button>);

    const handelClick = (e) => e.target.textContent = 'Tuch!'
    // return(<button onClick={(e) => handelClick(e)}>click me</button>)
    return(<button onDoubleClick={(e) => handelClick(e)}>click me</button>)
}

export default Button;