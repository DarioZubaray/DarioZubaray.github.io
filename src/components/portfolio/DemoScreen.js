import React from 'react'
import { useTranslation } from 'react-i18next';
import { TicTacToeBoard } from '../ui/TicTacToeBoard'
import { CalculatoreBoard } from '../ui/CalculatorBoard'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const DemoScreen = () => {
  const { t } = useTranslation();
  return (
    <div className='card'>
      <div className='card-body'>

        <h3>{t('demo.links')}</h3>
        <Link to="/conversor">
          <button className="btn btn-secondary mx-2">{t('demo.binaryConversor')}</button>
        </Link>
        <Link to="/type-matchup">
          <button className="btn btn-secondary mx-2">{t('demo.typeMatchQuiz')}</button>
        </Link>
        <Link to="/conversor#Operations">
          <button className="btn btn-secondary">{t('demo.operations')}</button>
        </Link>
        <hr/>

        <h3>{t('demo.calculator')}</h3>
        <div style={{ background: "linear-gradient(to right, #00AAFF, #00AA6C)", padding: "2rem"}}>
          <CalculatoreBoard />
        </div>

        <h3>{t('demo.tictactoe')}</h3>
        <div style={{ background: "linear-gradient(to left, #00AAFF, #00AA6C)", padding: "2rem"}}>
          <TicTacToeBoard />
        </div>

      </div>
    </div>
  )
}
