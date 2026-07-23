import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExperienceDescriptionHeader, ExperienceDescriptionBody } from './ExperienceDescription';

const mockExp = {
  company: 'Test Company',
  title: 'Software Engineer',
  from: { month: 3, monthName: 'March', year: 2022 },
  to: { month: 6, monthName: 'June', year: 2023 },
  language: 'English',
  location: 'Remote',
  contract: 'Full-Time Employee',
};

describe('ExperienceDescriptionHeader', () => {
  it('should render company name', () => {
    render(<ExperienceDescriptionHeader exp={mockExp} />);
    expect(screen.getByText('Test Company')).toBeInTheDocument();
  });

  it('should render job title', () => {
    render(<ExperienceDescriptionHeader exp={mockExp} />);
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });
});

describe('ExperienceDescriptionBody', () => {
  it('should render date range', () => {
    render(<ExperienceDescriptionBody exp={mockExp} />);
    expect(screen.getByText('March')).toBeInTheDocument();
    expect(screen.getByText('June')).toBeInTheDocument();
    expect(screen.getByText(/2022/)).toBeInTheDocument();
    expect(screen.getByText(/2023/)).toBeInTheDocument();
  });

  it('should render language', () => {
    render(<ExperienceDescriptionBody exp={mockExp} />);
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('should render location', () => {
    render(<ExperienceDescriptionBody exp={mockExp} />);
    expect(screen.getByText('Remote')).toBeInTheDocument();
  });

  it('should render contract type', () => {
    render(<ExperienceDescriptionBody exp={mockExp} />);
    expect(screen.getByText('Full-Time Employee')).toBeInTheDocument();
  });
});
