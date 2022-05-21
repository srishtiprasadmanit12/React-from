import React from "react";
import Login from "./Login"
var isLoggedIn=false;

function conditionallyRendered(){
        if(isLoggedIn===true)
        {
            return ( <h1>Hello</h1>);
        }
           
        else{
            return(
               <Login />
            );
        }
       
}
function App() {
  return (
    <div className="container">
     {conditionallyRendered()};
    </div>
  );
}

export default App;
