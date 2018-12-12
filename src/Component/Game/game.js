import React from 'react';
import Board from '../Board/board';

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <h2>Welcome to Tic Tac Toe Game</h2>
          <Board />
        </div>
      </div>
    );
  }
}
