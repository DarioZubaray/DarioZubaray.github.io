import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should render copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/Dario Zubaray Portfolio/)).toBeInTheDocument();
  });

  it('should render current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`2014 - ${currentYear}`))).toBeInTheDocument();
  });
});
