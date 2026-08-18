import React from 'react';
import { screen } from '@testing-library/react';
import { GithubReposCard } from './GithubReposCard';
import { renderWithProviders } from '../../test-utils';

const mockRepos = [
  { html_url: 'https://github.com/test/repo1', name: 'repo1', description: 'First repo', language: 'JavaScript' },
  { html_url: 'https://github.com/test/repo2', name: 'repo2', description: '', language: '' },
];

describe('GithubReposCard', () => {
  it('should render repo names', () => {
    renderWithProviders(<GithubReposCard repos={mockRepos} />);
    expect(screen.getByText('repo1')).toBeInTheDocument();
    expect(screen.getByText('repo2')).toBeInTheDocument();
  });

  it('should render repo links', () => {
    renderWithProviders(<GithubReposCard repos={mockRepos} />);
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', 'https://github.com/test/repo1');
  });

  it('should render description or fallback', () => {
    renderWithProviders(<GithubReposCard repos={mockRepos} />);
    expect(screen.getByText('First repo')).toBeInTheDocument();
    expect(screen.getByText('No description')).toBeInTheDocument();
  });

  it('should render language or fallback', () => {
    renderWithProviders(<GithubReposCard repos={mockRepos} />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('No language')).toBeInTheDocument();
  });
});
