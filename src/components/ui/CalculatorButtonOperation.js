import React from 'react'
import { ACTIONS } from './CalculatorBoard'

export const CalculatorButtonOperation = ({ operand, dispatch }) => {
  return (
    <button
        onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: operand } })}
    >{ operand }</button>
  )
}
