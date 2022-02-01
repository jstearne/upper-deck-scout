import React from 'react';
// import Welcome from './components/Welcome';
// import Player from './components/Player';

// define our Welcome functional component
function App(props) {
// what should the component return
  return (
  <div> 
    <h1>Welcome to Upper Deck Scout, {props.name}!</h1>
    <p>You are currently in {props.location}</p>
  </div>
  );
}

export default App;

// this is my welcome component, before refactoring. It takes in props and returns a <div>