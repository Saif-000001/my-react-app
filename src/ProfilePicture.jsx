// click even
import React from "react";
import user from "./assets/user.jpg"

function ProfilePicture (){

    const handelClick = (e) => e.target.style.display = "none"
    // const handelClick = () => console.log("tuch!");

    return ( <img onClick={(e) => handelClick(e)} className="img" src={user} alt="profile-picture" /> )
}

export default ProfilePicture;