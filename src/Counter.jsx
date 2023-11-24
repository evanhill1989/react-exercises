/*
    1. Create a new Vite React Project

    2. Create a Counter.jsx file to create a Counter
       Component that you export within it

    3. Inside Counter, create an <h1> with two <button>
       elements. One button should have the text '-' inside
       while the other has a '+' inside.

    4. Make it so that the <h1> displays a counter starting at
       0 and when you click the buttons, they act appropriately.
       (The counter in the h1 should go up and down by 1)

    5. Import the Counter component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser
*/
import { useState } from "react";

function Counter(){

    
        let[count, setCount] = useState(0);
       
        const add = () => setCount(count + 1);
        const subtract = () => setCount(count - 1);

   
    

    return (

        <>
            <h1>Count : {count}</h1>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
        </>
    )

}

export default Counter