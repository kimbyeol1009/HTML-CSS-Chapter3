import React from "react";
import {Link} from "react-router-dom";
const Main = () =>{
    return(
    <div className="main">
        <Link to="/">
            <img src={require('../images/google.png')} alt=""/><br/>
        </Link>

        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input className="input-area input-box" type="text"/>
        <i className="fa-solid fa-microphone mic-icon"></i><br/>
        <div className="button-area">
        <button className="button-style">Google Search</button>
        <button className="button-style">I'm feeling lucky</button>
        </div>
    </div>

    )
};

export default Main;