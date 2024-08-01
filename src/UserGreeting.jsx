// conditional rendaring

import React from "react";
import propTypes from "prop-types"
function UserGreeting (props){
    // if(props.isLoggin){
    //    return <h2 className="welcome-message">Welcome {props.name}</h2>
    // }else{
    //   return <h2 className="login-message">Plesse log in to continue</h2>
    // }

    // return(props.isLoggin ? <h2 className="welcome-message">Welcome {props.name}</h2>
    //                       : <h2 className="login-message">Plesse log in to continue</h2>
    //  );

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.name}</h2>
    const logginMessage = <h2 className="login-message">Plesse log in to continue</h2>

    return (props.isLoggin ? welcomeMessage: logginMessage)
}

UserGreeting.propTypes = {
    isLoggin: propTypes.bool,
    name: propTypes.string
}

UserGreeting.defaultProps = {
    isLoggin: false,
    name: "SI"
}


export default UserGreeting;