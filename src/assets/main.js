import React from "react";
import {Link} from "react-router-dom";
const Main = () =>{
    return(
    <div className="main">
        <Link to="/">
            <img src={require('../images/google.png')} alt=""/><br/>
        </Link>

        <i className="fa-solid fa-magnifying-glass"></i>
        <input placeholder="react...새싹도아닌 씨앗에게 물을..." type="text"/>
        <i className="fa-solid fa-microphone"></i><br/>
        <button>Google Search</button>
        <button>I'm feeling lucky</button>
    </div>
    )
};

export default Main;