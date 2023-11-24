/*
    1. Create a new Vite React project

    2. Create a ContactForm.jsx file that has a component
       that returns a <form /> element

    3. Add the following inputs to the form:
       - A text input for "first name"
         Give this a placeholder and name property
       - A text input for "last name"
         Give this a placeholder and name property
       - A number input for "age"
         Give this a placeholder and name property
       - A submit button with type submit

    3. Make it so that on form SUBMISSION, you prevent
       the default form reload behaviour and then you 
       log out the first name, last name and age submitted

    4. Export this function and replace <App /> in the
       main.jsx file with this imported ContactForm component

    5. Check in your Browser to see if it works as expected

    HINT1* How do you prevent event defaults?
    HINT2* You have access to the form element in the event
    HINT3* Check out the FormData Web API on MDN
*/

function ContactForm (){
    // We want to run 
    function submitForm(e){
        e.preventDefault();
        const fd = new FormData(e.target);
        console.log(fd);
  

        for(const entry of fd.entries()){
            console.log(entry);
        }
        // console.log(e.form.value);
        // console.log(e.value);
        // console.log(firstName, lastName, age);
    }

    return (
        <>
        
           <form action="submit" onSubmit={submitForm}>
                <input type="text" name="firstName" placeholder="first name"/>
                <input type="text" name="lastName" placeholder="last name"/>
                <input type="text" name="age" placeholder="age"/>
                <input type="submit" value="Submit" />
           </form>
        
        </>
    )    
}


export default ContactForm