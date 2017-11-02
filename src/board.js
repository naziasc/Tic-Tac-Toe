import React from 'react';
import Square from './square.js';



class Board extends React.Component{
//function which handles what is going to happen when click


 renderSquare(i) {
   return (
     <Square
//add parens {} to stop js from adding ; to the code and breaking the code
//location of square is passed to the onClick handler
       value={this.props.squares[i]}
       onClick={() => this.props.onClick(i)}
     />
   );
 }


render() {
  return (
    <div>
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

export default Board;
