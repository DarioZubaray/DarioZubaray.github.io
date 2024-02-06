import React, { useReducer } from 'react';
import './calculatorBoard.css';

import { CalculatorButton } from './CalculatorButton';
import { CalculatorButtonOperation } from './CalculatorButtonOperation';

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUTE: 'evaluate'
}

function reducer(state, { type, payload }) {
    console.log({state});
    console.log({payload})

    switch(type) {
        case ACTIONS.CLEAR:
            return {}

        case ACTIONS.ADD_DIGIT:
            if(state.overwrite) return {...state, currentOperand: payload.digit, overwrite: false }
            if(payload.digit === "0" && state.currentOperand === "0" ) return state;
            if(payload.digit === "." && state.currentOperand.includes(".")) return state;

            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }

        case ACTIONS.CHOOSE_OPERATION:
            if(state.currentOperand == null && state.previousOperand == null) return state;
            if(state.currentOperand == null) return { ...state, operation: payload.operation }
            if(state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null,
                }
            }
            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null
            }

        case ACTIONS.EVALUTE:
            if(state.operation == null || state.currentOperand == null || state.previousOperand == null) return state;

            return {
                ...state,
                overwrite: true,
                previousOperand: null,
                currentOperand: evaluate(state),
                operation: null
            }

        case ACTIONS.DELETE_DIGIT:
            if(state.overwrite) return { ...state, currentOperand: null, overwrite: false }
            if(state.currentOperand == null) return state;
            if(state.currentOperand.length === 1) return { ...state, currentOperand: null }

            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1)
            }

        default:
            return { previousOperand: null, operation: null, currentOperand: null }
    }

}

function evaluate({ currentOperand, previousOperand, operation }) {
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if(isNaN(previous) || isNaN(current)) return "";

    let computation = "";
    console.log({operation})
    switch(operation) {
        case "+":
            computation = previous + current;
            break;
        case "-":
            computation = previous - current;
            break;
        case "*":
            computation = previous * current;
            break;
        case "÷":
            computation = previous / current;
            break;
        default:
            computation = "";
    }
    console.log({computation})
    return computation.toString();
}

const INTEGER_FORMATTER = Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0
});

function formatOperand(operand) {
    if(operand == null) return;

    const [integer, decimal] = operand.split(".");
    if(decimal == null) return INTEGER_FORMATTER.format(integer);

    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

export const CalculatoreBoard = () => {

    const [{previousOperand, operation, currentOperand}, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator-grid">
        <div className="output">
            <div className="previous-operand"> { formatOperand(previousOperand) } { operation }</div>
            <div className="current-operand"> { formatOperand(currentOperand) } </div>
        </div>

        <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>
        <CalculatorButtonOperation operand="÷" dispatch={ dispatch } />

        <CalculatorButton digit="1" dispatch={ dispatch } />
        <CalculatorButton digit="2" dispatch={ dispatch } />
        <CalculatorButton digit="3" dispatch={ dispatch } />
        <CalculatorButtonOperation operand="*" dispatch={ dispatch } />

        <CalculatorButton digit="4" dispatch={ dispatch } />
        <CalculatorButton digit="5" dispatch={ dispatch } />
        <CalculatorButton digit="6" dispatch={ dispatch } />
        <CalculatorButtonOperation operand="-" dispatch={ dispatch } />

        <CalculatorButton digit="7" dispatch={ dispatch } />
        <CalculatorButton digit="8" dispatch={ dispatch } />
        <CalculatorButton digit="9" dispatch={ dispatch } />
        <CalculatorButtonOperation operand="+" dispatch={ dispatch } />

        <CalculatorButton digit="." dispatch={ dispatch } />
        <CalculatorButton digit="0" dispatch={ dispatch } />
        <button className="span-two" onClick={() => dispatch({ type: ACTIONS.EVALUTE })}>=</button>

    </div>
  )
}
