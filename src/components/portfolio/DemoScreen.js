import React from 'react'
import { TicTacToeBoard } from '../ui/TicTacToeBoard'
import { CalculatoreBoard } from '../ui/CalculatorBoard'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const DemoScreen = () => {
  return (
    <div className='card'>
      <div className='card-body'>

        <h3>Links</h3>
        <Link to="/conversor">
          <button className="btn btn-secondary mx-2">Binary Conversor</button>
        </Link>
        <Link to="/type-matchup">
          <button className="btn btn-secondary mx-2">Type match Quiz</button>
        </Link>
        <Link to="/flappy-wiu">
          <button className="btn btn-secondary mx-2">Flappy Wiu</button>
        </Link>
        <hr/>

        <h3>Calculator</h3>
        <div style={{ background: "linear-gradient(to right, #00AAFF, #00AA6C)", padding: "2rem"}}>
          <CalculatoreBoard />
        </div>

        <h3>TicTacToe</h3>
        <div style={{ background: "linear-gradient(to left, #00AAFF, #00AA6C)", padding: "2rem"}}>
          <TicTacToeBoard />
        </div>

      </div>
    </div>
  )
}
