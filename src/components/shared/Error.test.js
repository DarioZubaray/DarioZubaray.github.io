import React from 'react';
import { render, screen } from '@testing-library/react';
import { Error } from './Error';

describe('Error', () => {
  it('should render status code when provided', () => {
    render(<Error status={404} />);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Could not load my page')).toBeInTheDocument();
  });

  it('should render default message when no status', () => {
    render(<Error />);
    expect(screen.getByText('Could not get this page')).toBeInTheDocument();
  });

  it('should render default message when status is falsy', () => {
    render(<Error status={0} />);
    expect(screen.getByText('Could not get this page')).toBeInTheDocument();
  });
});
