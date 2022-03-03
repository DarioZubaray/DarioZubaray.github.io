import React from 'react'
import { TicTacToeBoard } from '../ui/TicTacToeBoard'

export const DemoScreen = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h3>TicTacToe</h3>
        <TicTacToeBoard />
      </div>
    </div>
  )
}
