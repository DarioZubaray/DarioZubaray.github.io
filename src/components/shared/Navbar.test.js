import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../context/ThemeContext';
import { Navbar } from './Navbar';

const renderWithRouter = (component) => {
  return render(
    <ThemeProvider>
      <MemoryRouter>{component}</MemoryRouter>
    </ThemeProvider>
  );
};

describe('Navbar', () => {
  it('should render brand name', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Dario Zubaray')).toBeInTheDocument();
  });

  it('should render all nav links', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Studies')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Links')).toBeInTheDocument();
    expect(screen.getByText('Demo')).toBeInTheDocument();
    expect(screen.getByText('Github')).toBeInTheDocument();
  });

  it('should toggle navbar on toggler click', () => {
    renderWithRouter(<Navbar />);
    const toggler = screen.getByLabelText('Toggle navigation');
    const collapseDiv = toggler.closest('nav').querySelector('.navbar-collapse');

    expect(collapseDiv).toHaveClass('collapse');

    fireEvent.click(toggler);
    expect(collapseDiv).not.toHaveClass('collapse');
  });
});
