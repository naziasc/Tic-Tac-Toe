import React from 'react';
import Board from './board.js';
import calculateWinner from './index.js'

class Game extends React.Component {
//adding a constructor, copy the parents properties.
  constructor(props) {
   super(props);
   this.state = {
     history: [{
       squares: Array(9).fill(null),
     }],
     stepNumber: 0,
     xIsNext: true,
   };
 }
 handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
//we want it to be immutable, therefore slice creates a new array
    const squares = current.squares.slice();
//check if someone has won the game or if the square is occupied, prevent from taking the square
   if (calculateWinner(squares) || squares[i]) {
     return;
   }
//changes which piece is played depending on the value of xIsNext
   squares[i] = this.state.xIsNext ? 'X' : 'O';//ternary operator, makes If statement into 1 line
   this.setState({
//lets you go back to see previous moves
     history: history.concat([{
     squares: squares,
     }]),
     stepNumber: history.length,
     xIsNext: !this.state.xIsNext,
   });
 }
//takes in the step you want to see.
 jumpTo(step) {
     this.setState({
       stepNumber: step,
//calculates if the move is even or odd depending on the step you want to look at
       xIsNext: (step % 2) === 0,
     });
   }
 render() {
 const history = this.state.history;
 const current = history[this.state.stepNumber];
 const winner = calculateWinner(current.squares);
//maps over the step you wish to see, removing all proceeding steps.
 const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
//gives it a unique key, so react does not use the default array.
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
 let status;
 if (winner) {
   status = 'Winner: ' + winner;
 } else {
   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
 }

 return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
