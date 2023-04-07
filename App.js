import React, { Component } from 'react';
// import './SudokuBoard.css';
import './App.css';

class SudokuBoard extends Component {
  constructor(props) {
    super(props);

    // Initialize the Sudoku board with initial values
    this.state = {
      board: [
        5, 0, 9, 0, 0, 0, 4, 0, 0,
        7, 0, 8, 3, 0, 4, 9, 0, 0,
        6, 0, 1, 0, 0, 0, 7, 3, 0,
        4, 6, 2, 5, 0, 0, 0, 0, 0,
        3, 8, 5, 7, 2, 0, 6, 4, 9,
        1, 0, 7, 4, 0, 8, 2, 0, 0,
        2, 0, 0, 1, 0, 0, 0, 0, 4,
        0, 0, 3, 0, 4, 0, 0, 8, 7,
        0, 7, 0, 0, 5, 3, 0, 0, 6
      ]
    };
  }

  render() {
    return (
      <div className="sudoku-board">
        {this.state.board.map((cell, index) => (
          <div key={index} className="sudoku-cell">{cell !== 0 ? cell : ''}</div>
        ))}
      </div>
    );
  }
}

export default SudokuBoard;
