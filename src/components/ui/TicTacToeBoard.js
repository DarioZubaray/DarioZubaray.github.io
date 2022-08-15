import React, { useEffect, useState } from 'react'
import { TicTacToeButton } from './TicTacToeButton'
import './TicTacToeBoard.css'

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
    if (/*calculateWinner() ||*/ squares[i] || gameOver) {
      return;
    }
    const currentSquares = squares.slice();
    currentSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(currentSquares);
    setXIsNext(!xIsNext)
  }

  const calculateWinner = () => {
    console.log('calculate winner')
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
        setWinnerCombination([a, b, c]);
        setGameOver(true)
        return squares[a];
      }
    }
    if (!squares.includes(null))
      debugger
    console.log('setGameOver: '+ (!squares.includes(null)))
    setGameOver(!squares.includes(null))
    return null;
  }

  useEffect(() => {
    const winner = calculateWinner();
    console.log({ winner, gameOver, squares})
    if (winner) {
      setStatus('Winner: ' + winner);
    } else if ( gameOver ) {
      setStatus('Tied: No more moves!')
    } else {
      setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
    }
  }, [squares, xIsNext, gameOver, calculateWinner])

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
            {/* <div className="board-row"> */}
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            {/* </div> */}
          </div>

          <div className='row justify-content-center'>
            {/* <div className="board-row"> */}
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            {/* </div> */}
          </div>

          <div className='row justify-content-center'>
            {/* <div className="board-row"> */}
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            {/* </div> */}
          </div>

        <div className="text-center">
          <button className='btn btn-secondary my-3' onClick={ reset }>New Game</button>
        </div>
      </div>
  )
}
