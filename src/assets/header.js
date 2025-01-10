import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
    return(
        <div className="header-container">
        <div className="header">
            <Link className="header-item" to="/gmail">gmail</Link>
            <Link className="header-item" to="/images">Images</Link>
            <i className="fa-solid fa-bars header-item"></i>
        </div>
        </div>
    )
    }


    export default Header;