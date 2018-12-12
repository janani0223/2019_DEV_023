import React from 'react'
import Square from '../Square/square'

export default class Board extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      noOfMoves: 0,
    };
  }

  squareClicked(i) {
    const squares = this.state.squares.slice();
    if (winningPostions(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      noOfMoves: this.state.noOfMoves + 1,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.squareClicked(i)}
      />
    );
  }


    render() {
    const winner = winningPostions(this.state.squares);
    let status;
    
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        if(this.state.noOfMoves === 9){
          status = 'Match is Drawn';
        }
        else{
          if(this.state.noOfMoves === 0){
            status = 'First player: X';
          }
          else
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
      
      }



    return (
      <div className="board">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
      );
    }
}

function winningPostions(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
