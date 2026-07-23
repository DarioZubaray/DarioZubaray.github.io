import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CourseSortingButton } from './CourseSortingButton';

describe('CourseSortingButton', () => {
  it('should render button with filter name', () => {
    render(
      <CourseSortingButton filterName="Older first" activeSortingButton="Newest first" activeAndSorting={() => {}} />
    );
    expect(screen.getByText('Older first')).toBeInTheDocument();
  });

  it('should apply solid class when not active', () => {
    render(
      <CourseSortingButton filterName="Older first" activeSortingButton="Newest first" activeAndSorting={() => {}} />
    );
    expect(screen.getByRole('button')).toHaveClass('btn-info');
  });

  it('should apply outline class when active', () => {
    render(
      <CourseSortingButton filterName="Older first" activeSortingButton="Older first" activeAndSorting={() => {}} />
    );
    expect(screen.getByRole('button')).toHaveClass('btn-outline-info');
  });

  it('should call activeAndSorting on click', () => {
    const mockFn = jest.fn();
    render(
      <CourseSortingButton filterName="Newest first" activeSortingButton="Older first" activeAndSorting={mockFn} />
    );
    fireEvent.click(screen.getByText('Newest first'));
    expect(mockFn).toHaveBeenCalledWith('Newest first');
  });
});
