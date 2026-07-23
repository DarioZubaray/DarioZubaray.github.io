import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CourseFilterButton } from './CourseFilterButton';

describe('CourseFilterButton', () => {
  it('should render button with name', () => {
    render(
      <CourseFilterButton name="react" filterName="react" active="all" activeAndFilter={() => {}} />
    );
    expect(screen.getByText('react')).toBeInTheDocument();
  });

  it('should apply solid class when not active', () => {
    render(
      <CourseFilterButton name="react" filterName="react" active="all" activeAndFilter={() => {}} />
    );
    expect(screen.getByRole('button')).toHaveClass('btn-info');
  });

  it('should apply outline class when active', () => {
    render(
      <CourseFilterButton name="react" filterName="react" active="react" activeAndFilter={() => {}} />
    );
    expect(screen.getByRole('button')).toHaveClass('btn-outline-info');
  });

  it('should use secondary style for language filters', () => {
    render(
      <CourseFilterButton name="spanish" filterName="spanish" active="all" activeAndFilter={() => {}} />
    );
    expect(screen.getByRole('button')).toHaveClass('btn-secondary');
  });

  it('should call activeAndFilter on click', () => {
    const mockFn = jest.fn();
    render(
      <CourseFilterButton name="react" filterName="react" active="all" activeAndFilter={mockFn} />
    );
    fireEvent.click(screen.getByText('react'));
    expect(mockFn).toHaveBeenCalledWith('react');
  });
});
