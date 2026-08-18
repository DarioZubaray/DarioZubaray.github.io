import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';
import { renderWithProviders } from '../../test-utils';

describe('Navbar', () => {
  it('should render brand name', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('Dario Zubaray')).toBeInTheDocument();
  });

  it('should render all nav links', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Studies')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Links')).toBeInTheDocument();
    expect(screen.getByText('Demo')).toBeInTheDocument();
    expect(screen.getByText('Github')).toBeInTheDocument();
  });

  it('should toggle navbar on toggler click', () => {
    renderWithProviders(<Navbar />);
    const toggler = screen.getByLabelText('Toggle navigation');
    const collapseDiv = toggler.closest('nav').querySelector('.navbar-collapse');

    expect(collapseDiv).toHaveClass('collapse');

    fireEvent.click(toggler);
    expect(collapseDiv).not.toHaveClass('collapse');
  });
});
