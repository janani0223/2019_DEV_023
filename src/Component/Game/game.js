import React from 'react';
import Board from '../Board/board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h1>Welcome to Tic Tac Toe Game</h1>
          <Board />
          <div className = "startOver">
            <button className = "startAgain" onClick={() => { window.location.reload()} } > Start Over </button>
          </div>
          
        </div>
      </div>
    );
  }
}
