import React from 'react';

function Player(props) {
    return(
        <div>
            <h1>Player Name: {props.name}</h1>
            <p>Position: {props.position}<br/>Team: {props.team}</p>
        </div>
    )
}

export default Player;