import React, { useCallback, useEffect, useState } from 'react'
import { TicTacToeButton } from './TicTacToeButton'
import './TicTacToeBoard.css'

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

export const TicTacToeBoard = () => {

  const [ squares, setSquares ] = useState( Array(9).fill(null) )
  const [ xIsNext, setXIsNext ] = useState( true )
  const [ status, setStatus ] = useState( 'Next player: X' )
  const [ winnerCombination, setWinnerCombination ] = useState( [] )
  const [ gameOver, setGameOver ] = useState( false )

  const renderSquare = (i) => {
    let color = 'black'
    if ( winnerCombination.length > 0 ) {
      if ( winnerCombination.includes(i) ) {
        color = 'green'
      } else {
        color = 'red'
      }
    }
    return (
      <TicTacToeButton
        squareValue={ squares[i] }
        onClick={() => handleClick(i)}
        color={ color }
      />
    );
  }

  const handleClick = (i) => {
    if (squares[i] || gameOver) {
      return;
    }
    const currentSquares = squares.slice();
    currentSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(currentSquares);
    setXIsNext(!xIsNext)
  }

  const calculateWinner = useCallback(() => {
    return () => {
      console.log('calculate winner')

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

          if (gameOver !== true) {
            setGameOver(true);
            setWinnerCombination([a, b, c]);
          }

          return squares[a];
        }
      }

      setGameOver(!squares.includes(null))
      return null;
    }
  }, [gameOver, squares])

  const calculateGameStatus = useCallback(() => {
    return (winner) => {
      let currentStatus = '';
      if (winner) {
        currentStatus = 'Winner: ' + winner;
      } else if ( gameOver ) {
        currentStatus = 'Tied: No more moves!';
      } else {
        currentStatus = 'Next player: ' + (xIsNext ? 'X' : 'O');
      }

      if (status !== currentStatus) {
        setStatus(currentStatus);
      }
    }
  }, [gameOver, status, xIsNext])

  useEffect(() => {
    const winner = calculateWinner();
    calculateGameStatus(winner);
  }, [ calculateWinner, calculateGameStatus ])


  const reset = () => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
    setStatus('Next player: X')
    setWinnerCombination([])
    setGameOver(false)
  }

  return (
    <div className='text-center'>
        <div className="status">{status}</div>
          <div className='row justify-content-center'>
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
          </div>

          <div className='row justify-content-center'>
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
          </div>

          <div className='row justify-content-center'>
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
          </div>

        <div className="text-center">
          <button className='btn btn-secondary my-3' onClick={ reset }>New Game</button>
        </div>
      </div>
  )
}
