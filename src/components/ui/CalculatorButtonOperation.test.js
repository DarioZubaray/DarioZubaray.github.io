import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CalculatorButtonOperation } from './CalculatorButtonOperation';
import { ACTIONS } from './CalculatorBoard';

describe('CalculatorButtonOperation', () => {
  it('should render operand', () => {
    const dispatch = jest.fn();
    render(<CalculatorButtonOperation operand="+" dispatch={dispatch} />);
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('should dispatch CHOOSE_OPERATION on click', () => {
    const dispatch = jest.fn();
    render(<CalculatorButtonOperation operand="*" dispatch={dispatch} />);
    fireEvent.click(screen.getByText('*'));
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTIONS.CHOOSE_OPERATION,
      payload: { operation: '*' },
    });
  });
});
