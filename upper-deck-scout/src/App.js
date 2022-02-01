import React from 'react';
import Welcome from './components/Welcome';
import Player from './components/Player';
import Profile from './components/Profile';


// class component with state defined (init state requires constructor/super)
class App extends React.Component {
  constructor() { 
    super();
    this.state = {
      name: "Klay Thompson",
      position: "Shooting God, 3-D Wing",
      team: "Golden State Warriors",
    };
  }
  // what gets displayed
  render() {
    return (
      <div>
        <Profile />
        <div>
          <Welcome name={"Jared"} location={"San Francisco"} />
          <Player 
            name={this.state.name}
            position={this.state.position}
            team={this.state.team}
          />
        </div>
      </div>
    );
  }
}

export default App;

// App class component holds all of my information (Player, Profile, Welcome componenets).
// Index.js calls App component and nothing else.