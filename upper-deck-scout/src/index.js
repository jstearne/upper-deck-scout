import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './App'; // 'Welcome' compoenent defined in App.js
import Player from './components/Player'; // everything is in src/ so relative paths start AFTER src/ = ./
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Welcome name={"Jared"} location={"San Francisco, CA"} />
    <Player 
      name={"Klay Thompson"} 
      position={"Shooting God"} 
      team={"Golden State Warriors"} />

      <Player 
      name={"Draymond Green"} 
      position={"Small Ball 5 / Point Center"} 
      team={"Golden State Warriors"} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
