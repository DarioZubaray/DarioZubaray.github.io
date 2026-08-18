import React from 'react';
import { screen } from '@testing-library/react';
import { Error } from './Error';
import { renderWithProviders } from '../../test-utils';

describe('Error', () => {
  it('should render status code when provided', () => {
    renderWithProviders(<Error status={404} />);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Could not load my page')).toBeInTheDocument();
  });

  it('should render default message when no status', () => {
    renderWithProviders(<Error />);
    expect(screen.getByText('Could not get this page')).toBeInTheDocument();
  });

  it('should render default message when status is falsy', () => {
    renderWithProviders(<Error status={0} />);
    expect(screen.getByText('Could not get this page')).toBeInTheDocument();
  });
});
