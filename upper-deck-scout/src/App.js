import React from 'react'

// define our Welcome functional component
function Welcome(props) {
// what should the component return
  return (
  // Make sure to return some UI
    <h1>Welcome to Upper Deck Scout, {props.name}!</h1>
  );
}

export default Welcome