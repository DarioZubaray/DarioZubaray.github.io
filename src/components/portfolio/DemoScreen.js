import React from 'react'
import { TicTacToeBoard } from '../ui/TicTacToeBoard'
import { CalculatoreBoard } from '../ui/CalculatorBoard'

export const DemoScreen = () => {
  return (
    <div className='card'>
      <div className='card-body'>

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
