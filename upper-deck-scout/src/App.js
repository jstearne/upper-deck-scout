import React from 'react'

// define our Welcome functional component
function Welcome(props) {
// what should the component return
  return (
  <div> 
    <h1>Welcome to Upper Deck Scout, {props.name}!</h1>
    <p>You are currently in {props.location}</p>
  </div>
  );
}

export default Welcome