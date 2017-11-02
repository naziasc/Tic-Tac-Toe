import React from 'react';
//rather then having a class this is a simple function that only does one thing.
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


export default Square;
