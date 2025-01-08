import React from "react";
import {Link} from "react-router-dom";

const Footer = ()=>{
    return(
        //gd
        <div class="footer">
                Google offered in:
                <Link to="#">한국어</Link>
                <Link to="#">tiếng Việt</Link>
                <Link to="#">Français</Link>
                <Link to="#">中文" (Zhōngwén)</Link><br/>
                Vitenam<br/>
            <span>
                <Link to="#">About</Link>
                <Link to="#">Advertising</Link>
                <Link to="#">Business</Link>
                <Link to="#">How search works</Link>
            </span>
            <span>
                <Link to="#">Privacy</Link>
                <Link to="#">Term</Link>
                <Link to="#">Settings</Link>
            </span>

    </div>
    )
};

export default Footer;