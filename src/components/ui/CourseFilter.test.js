import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { CourseFilter } from './CourseFilter';
import { renderWithProviders } from '../../test-utils';

describe('CourseFilter', () => {
  it('should render filter and sorting labels', () => {
    renderWithProviders(<CourseFilter filterCourse={() => {}} sortedCourses={() => {}} />);
    expect(screen.getByText('Filter:')).toBeInTheDocument();
    expect(screen.getByText('Sorted by:')).toBeInTheDocument();
  });

  it('should render all filter buttons', () => {
    renderWithProviders(<CourseFilter filterCourse={() => {}} sortedCourses={() => {}} />);
    expect(screen.getByText('all')).toBeInTheDocument();
    expect(screen.getByText('java')).toBeInTheDocument();
    expect(screen.getByText('react')).toBeInTheDocument();
    expect(screen.getByText('vue')).toBeInTheDocument();
  });

  it('should render sorting buttons', () => {
    renderWithProviders(<CourseFilter filterCourse={() => {}} sortedCourses={() => {}} />);
    expect(screen.getByText('Older first')).toBeInTheDocument();
    expect(screen.getByText('Newest first')).toBeInTheDocument();
  });

  it('should call filterCourse when a filter button is clicked', () => {
    const mockFilter = jest.fn();
    renderWithProviders(<CourseFilter filterCourse={mockFilter} sortedCourses={() => {}} />);
    fireEvent.click(screen.getByText('react'));
    expect(mockFilter).toHaveBeenCalledWith('tags.programming.frontend.web.framework.react');
  });

  it('should call sortedCourses when a sorting button is clicked', () => {
    const mockSort = jest.fn();
    renderWithProviders(<CourseFilter filterCourse={() => {}} sortedCourses={mockSort} />);
    fireEvent.click(screen.getByText('Newest first'));
    expect(mockSort).toHaveBeenCalledWith('Newest first');
  });
});
