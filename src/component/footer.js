import React from "react";
import Linkedin from '../images/linkedin.png';
import Facebook from '../images/Facebook.png';

function Footer(){
    return(
        <footer className="bg-gray-800 mt-5 h-1/4 flex flex-col justify-center items-center h-3/4">
            <p>Syllac</p>
            <div className="flex flex-row justify-center items-center h-3/4 mt-1">
                <a href="https://www.linkedin.com/in/sylvain-lacroix-5887a5184/"><img className="w-5" src={Linkedin} alt="logo linkedin"/></a>
                <a href="https://www.facebook.com/sylvain.lacroix.58"><img className="w-5" src={Facebook} alt="logo Facebook"/></a>
            </div>
        </footer>
    )
}

export default Footer;