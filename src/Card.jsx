// Card Component

import React from "react";
import user from "./assets/user.jpg"
import ButtonExternal from "./ButtonExternal";

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={user} alt="user" />
            <h2 className="card-title">MSI Saif</h2>
            <p className="card-text">I'm learning React</p>
            <ButtonExternal />
        </div>
    );
}

export default Card;