
import {useState} from "react";
import Button from "./Button.jsx"


function Profile() {

    const [logText, setLoggedInText] = useState("Logged In");

    
   

    return (
        <>
            <p>{logText}</p>
           <Button setLoggedInTextTest={setLoggedInText} logTextTest={logText}/>

        </>
    )
}

export default Profile