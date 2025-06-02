import React from "react";
import "./Header.css";
import wonkaLogo from "../../assets/wonka-logo.png";
const Header=()=>{

    return(<>
    
        <header className="header">
            <img src={wonkaLogo} alt="Wonka Logo" />
            <div className="registrar">
                <button className="register-button">Registrar</button>
            </div>

        </header>
    
    </>)
}
export default Header;