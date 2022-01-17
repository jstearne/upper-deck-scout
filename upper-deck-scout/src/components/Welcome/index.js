import React from "react";

function Welcome(props) {
  return (
    <div>
      <h1>Welcome to Upper Deck Scout, {props.name}!</h1>
      <p>You are located in {props.location}</p>
    </div> // <-- JSX!
  );
}

export default Welcome;