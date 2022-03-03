import React from 'react'

export const TicTacToeButton = ({ squareValue, onClick, color }) => {

    return (
        <button className="square" onClick={ onClick }>
            <span style={{ color }}>{ squareValue }</span>
        </button>
    )
}
