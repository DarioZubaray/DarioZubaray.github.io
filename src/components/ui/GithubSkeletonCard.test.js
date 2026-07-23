import React from 'react';
import { render } from '@testing-library/react';
import GithubSkeletonCard from './GithubSkeletonCard';

jest.mock('react-loading-skeleton', () => {
  return function MockSkeleton() {
    return <div data-testid="skeleton" />;
  };
});

describe('GithubSkeletonCard', () => {
  it('should render without crashing', () => {
    const { container } = render(<GithubSkeletonCard />);
    expect(container.firstChild).toBeTruthy();
  });

  it('should render skeleton placeholders', () => {
    const { getAllByTestId } = render(<GithubSkeletonCard />);
    const skeletons = getAllByTestId('skeleton');
    expect(skeletons.length).toBeGreaterThan(0);
  });
});
