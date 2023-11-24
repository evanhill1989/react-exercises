
// onClick={handleButton}
function Button ({setLoggedInTextTest , logTextTest}) {

   const handleClick = () => {
      if(logTextTest === "Logged In"){ setLoggedInTextTest("Logged Out")}
      else{setLoggedInTextTest("Logged In")}
     
  }

   return (
      <>
         <button onClick={handleClick}>Toggle Login</button>
       
      </>
      
   )
   
}

export default Button