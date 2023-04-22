import React from "react";
import Form from "./Form";

let isUserRegistered = false;

function App() {
  return (
    <div className="container">
      {!isUserRegistered && <h1>Hello</h1>}
      <Form isUserRegistered={isUserRegistered} />
    </div>
  );
}

export default App;
