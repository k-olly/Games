import { useState } from 'react';
import style from './TTTGame.css';

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [isActive, setIsActive] = useState(false);
  const [computerIsActive, setComputerIsActive] = useState(false);
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [hidePartnerButton, setHidePartnerButton] = useState(false);
  const [hideWithoutPartnerButton, setHideWithoutPartnerButton] = useState(false);

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleClickInComputerMode(i) {
    //Handle users click
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);

    //Click with computer
    if(calculateWinner(nextSquares)) {
      return;
    }
    clickByComputer(nextSquares);
  }

  function clickByComputer(squares) {
    const nextSquares = squares.slice();
    let emptySquaresIndex = [];
    
    for(let j=0; j<nextSquares.length; j++) {
      if(squares[j] === null) {
          emptySquaresIndex.push(j);
      }
    }

    let randNum = (Math.floor(Math.random()*emptySquaresIndex.length));
    let emptySquare = emptySquaresIndex[randNum];
  
    nextSquares[emptySquare]= 'O';
    setSquares(nextSquares);
  }

  function handlePartnerButtonClick() {
    setIsActive(true);
    setHideWithoutPartnerButton(true);
  }

  function handleWithoutPartnerButtonClick() {
    setComputerIsActive(true);
    setHidePartnerButton(true);
  }

  function handleNewGame() {
    setSquares(Array(9).fill(null));
    setHidePartnerButton(false);
    setHideWithoutPartnerButton(false);
    setIsActive(false);
    setComputerIsActive(false);
    setXIsNext('X');
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if(isActive) {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const gameBodyWithPartner = isActive ? (
    <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <button id='new-game' onClick={handleNewGame} >New Game</button>
    </>
  ): '';

  const gameBodyWithoutPartner = computerIsActive ? (
    <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClickInComputerMode(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClickInComputerMode(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClickInComputerMode(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClickInComputerMode(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClickInComputerMode(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClickInComputerMode(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClickInComputerMode(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClickInComputerMode(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClickInComputerMode(8)} />
        </div>
        <button id='new-game' onClick={handleNewGame} >New Game</button>
    </>
  ): '';

  return (
    <>
      <div className='tttcomponent'>
        <h3>Tic-Tac-Toe</h3>
        <h4>How to play the game?</h4>
        <p>The game is played on a grid that's 3 squares by 3 squares. Choose your partner, you are X , your partner / the computer is O . Players take turns putting their marks in empty squares. The first player to get 3 of his / her marks in a row (up, down, across, or diagonally) is the winner.</p>
        <div>
          <button id='partner' onClick={handlePartnerButtonClick} hidden={hidePartnerButton}>I have a <br></br> partner</button>
          <button id='no-partner' onClick={handleWithoutPartnerButtonClick} hidden={hideWithoutPartnerButton}>I don't have <br></br> a partner</button>
        </div>
        {gameBodyWithPartner}
        {gameBodyWithoutPartner}
      </div>
    </>
  );
}

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