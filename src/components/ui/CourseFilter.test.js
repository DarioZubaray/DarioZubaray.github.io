import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CourseFilter } from './CourseFilter';

describe('CourseFilter', () => {
  it('should render filter and sorting labels', () => {
    render(<CourseFilter filterCourse={() => {}} sortedCourses={() => {}} />);
    expect(screen.getByText('Filter:')).toBeInTheDocument();
    expect(screen.getByText('Sorted by:')).toBeInTheDocument();
  });

  it('should render all filter buttons', () => {
    render(<CourseFilter filterCourse={() => {}} sortedCourses={() => {}} />);
    expect(screen.getByText('all')).toBeInTheDocument();
    expect(screen.getByText('java')).toBeInTheDocument();
    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('vue')).toBeInTheDocument();
  });

  it('should render sorting buttons', () => {
    render(<CourseFilter filterCourse={() => {}} sortedCourses={() => {}} />);
    expect(screen.getByText('Older first')).toBeInTheDocument();
    expect(screen.getByText('Newest first')).toBeInTheDocument();
  });

  it('should call filterCourse when a filter button is clicked', () => {
    const mockFilter = jest.fn();
    render(<CourseFilter filterCourse={mockFilter} sortedCourses={() => {}} />);
    fireEvent.click(screen.getByText('react'));
    expect(mockFilter).toHaveBeenCalledWith('tags.programming.frontend.web.framework.react');
  });

  it('should call sortedCourses when a sorting button is clicked', () => {
    const mockSort = jest.fn();
    render(<CourseFilter filterCourse={() => {}} sortedCourses={mockSort} />);
    fireEvent.click(screen.getByText('Newest first'));
    expect(mockSort).toHaveBeenCalledWith('Newest first');
  });
});
