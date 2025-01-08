import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
    return(
        <div className="header">
            <Link to="/gmail">gmail</Link>
            <Link to="/images">Images</Link>
            <i className="fa-solid fa-bars"></i>
        </div>


    )
}
export default Header;