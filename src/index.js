//importing the react modules.
import React from 'react';
import ReactDOM from 'react-dom';
//importing of all the different files
import './index.css';
import Game from './game.js'

//all the winning combonations
function calculateWinner(squares) {
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
//exporting the function, so can be used anywhere, as long as its imported
export default calculateWinner;
//this has to be at the bottom of the page inorder to work. otherwise would crash if any function below
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
