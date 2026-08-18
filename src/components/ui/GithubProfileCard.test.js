import React from 'react';
import { screen } from '@testing-library/react';
import { GithubProfileCard } from './GithubProfileCard';
import { renderWithProviders } from '../../test-utils';

const mockUser = {
  name: 'Dario Zubaray',
  avatar_url: 'https://example.com/avatar.png',
  bio: 'Software Engineer',
  blog: 'https://example.com/blog',
  html_url: 'https://github.com/DarioZubaray',
};

describe('GithubProfileCard', () => {
  it('should render user name', () => {
    renderWithProviders(<GithubProfileCard user={mockUser} />);
    expect(screen.getByText('Dario Zubaray')).toBeInTheDocument();
  });

  it('should render avatar image', () => {
    renderWithProviders(<GithubProfileCard user={mockUser} />);
    const img = screen.getByAltText('Github avatar');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.png');
  });

  it('should render bio', () => {
    renderWithProviders(<GithubProfileCard user={mockUser} />);
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('should render blog link', () => {
    renderWithProviders(<GithubProfileCard user={mockUser} />);
    const blogLink = screen.getByText('My blog');
    expect(blogLink).toHaveAttribute('href', 'https://example.com/blog');
  });

  it('should render github link', () => {
    renderWithProviders(<GithubProfileCard user={mockUser} />);
    const githubLink = screen.getByText('Go to github');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/DarioZubaray');
  });
});
