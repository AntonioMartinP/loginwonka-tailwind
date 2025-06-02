import { use } from "react";
import "./Login.css";
import {useState} from "react";

const Login=()=>{

const[username,setUsername]=useState("");
const[password,setPassword]=useState("");
const[datasend,setDatasend]=useState(false);

const inputHandlers={
    mail: setUsername,
    password:setPassword
}
const handleInputChange=(event)=>{
    const{name,value}=event.target;
    const handler=inputHandlers[name];

    if(handler){
        handler(value);
    }
}

const handleDataSend=(event)=>{
    event.preventDefault();
    console.log(username);
    console.log(password);
    setDatasend(true);
}

const errorMail=((username==="" || !username.includes("@")) && datasend);
const errorPass=((password==="" || password.length<6)&& datasend);

return(<>
<div className="login-form-container">
    <form className="login-form">
        <h1>Login</h1>
        <input type="text"
         name="mail" 
         placeholder="Username" 
         className={`input-field ${errorMail ? "input-field-error" : ""}`}
         onChange={(event)=>handleInputChange(event)}
         value={username}
         />
        <input type="password" 
        name="password" 
        placeholder="Password" 
        className={`input-field ${errorPass ? "input-field-error" : ""}`}
        onChange={(event)=>handleInputChange(event)}
        value={password}
        />
        <button type="submit" className="submit-button" onClick={(event)=>handleDataSend(event)}>Enviar</button>
    </form>
</div>

</>)
}
export default Login;