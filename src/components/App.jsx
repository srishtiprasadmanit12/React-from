import React from "react";
import Form from "./Form"
var UserisRegistered=true;
function App(){
  return (
    <div className="container">
    <Form 
        isRegistered={UserisRegistered}
    />
    {/* {isLoggedIn?<h1>Hello</h1>:<Login />}; */}
    </div>
  );
}

export default App;
