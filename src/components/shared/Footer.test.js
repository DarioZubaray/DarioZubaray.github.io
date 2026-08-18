import React from 'react';
import { screen } from '@testing-library/react';
import { Footer } from './Footer';
import { renderWithProviders } from '../../test-utils';

describe('Footer', () => {
  it('should render copyright text', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/Dario Zubaray Portfolio/)).toBeInTheDocument();
  });

  it('should render current year', () => {
    renderWithProviders(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`2014 - ${currentYear}`))).toBeInTheDocument();
  });
});
