/*
    1. Create a new Vite React Project

    2. Create a Form.jsx file to create a Form
       Component that you export within it

    3. Inside Form, create an 3 <input> text fields, one
       for first name, last name, and email. Create a 'submit'
       <button> below the inputs. Wrap the inputs and button inside
       a <form> element. Then, add an <h1> element below the
       <form> element (empty text to start)

    4. Make it so that when you type in to the 3 <input> elements
       and then click 'submit', the data for the 3 inputs gets
       displayed inside the <h1> element as text. You can format
       this text however you want, but make sure the page does not
       reload when you click 'submit'

    5. Import the Form component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser

    BONUS* Can you think of a few ways you could do this?
*/
import {useState} from 'react';



function Form () {

  

    const[fname, setFname] = useState("");
    const[lname, setLname] = useState("");
    const[email, setEmail] = useState("");
    const[h1Text, setH1Text] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fname, lname, email);
        setH1Text(`First Name: ${fname} Last Name: ${lname} Email: ${email}`);
        setFname("");
    };

    const handleFname = (e) => {
        setFname(e.target.value);
    };

    const handleLname = (e) => {
        setLname(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <>
            <form action="submit" onSubmit={handleSubmit}>

                <input type="text" name='fName' onInput={handleFname}/>
                <input type="text" name='lName' onInput={handleLname}/>
                <input type="text" name='email' onInput={handleEmail}/>
                <button type="submit">Submit</button>



            </form>
            <h1>{h1Text}</h1>
        </>
    )
}

export default Form