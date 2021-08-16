import React from 'react';
import ReactDOM from 'react-dom';

class Square extends React.Component {
  render () {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
// The square component renders a single button and the board will display that button 9 times in a row. 

class Board extends React.Component {
  renderEachSquare (i) {
    return <Square value={i} />;
  }
  
  render() {
    const status = 'Next Player: X';
    return (
      <>
        <div className="status">
          {status}
        </div>
        <div className="board-row">
          {this.render(0)}
          {this.render(1)}
          {this.render(2)}
        </div>
        <div className="board-row">
          {this.render(3)}
          {this.render(4)}
          {this.render(5)}
        </div>
        <div className="board-row">
          {this.render(6)}
          {this.render(7)}
          {this.render(8)}
        </div>
      </>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render (
  <Game />,
  document.getElementById('root')
);