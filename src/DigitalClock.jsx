// Digital clock app

import React, {useState, useEffect} from "react";

function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    },[])

    function formalTime (){
        let houre = time.getHours()
        const minutes = time.getMinutes()
        const second = time.getSeconds()
        const meridiam = houre >= 12 ? "PM" : "AM"

        houre = houre % 12 || 12;

        return `${padZero(houre)}:${padZero(minutes)}: ${padZero(second)}: ${meridiam}`
    }

    function padZero(number){
        return (number<10 ? "0": "") + number;
    }

    return (
    <div className="clock-container">
        <div className="clock">
            <span>{formalTime()}</span>
        </div>
    </div> );
}

export default DigitalClock;