import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CalculatorButton } from './CalculatorButton';
import { ACTIONS } from './CalculatorBoard';

describe('CalculatorButton', () => {
  it('should render digit', () => {
    const dispatch = jest.fn();
    render(<CalculatorButton digit="5" dispatch={dispatch} />);
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('should dispatch ADD_DIGIT on click', () => {
    const dispatch = jest.fn();
    render(<CalculatorButton digit="3" dispatch={dispatch} />);
    fireEvent.click(screen.getByText('3'));
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTIONS.ADD_DIGIT,
      payload: { digit: '3' },
    });
  });
});
