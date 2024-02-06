import React from 'react'
import { ACTIONS } from './CalculatorBoard'

export const CalculatorButton = ({ digit, dispatch }) => {
  return (
    <button
        onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } }) }
    > { digit } </button>
  )
}
