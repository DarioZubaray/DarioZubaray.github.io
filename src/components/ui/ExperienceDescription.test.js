import React from 'react';
import { screen } from '@testing-library/react';
import { ExperienceDescriptionHeader, ExperienceDescriptionBody } from './ExperienceDescription';
import { renderWithProviders } from '../../test-utils';

const mockExp = {
  companyKey: 'experience.companies.botmaker',
  titleKey: 'experience.titles.softwareEngineer',
  from: { month: 3, monthNameKey: 'experience.months.march', year: 2022 },
  to: { month: 6, monthNameKey: 'experience.months.june', year: 2023 },
  languageKey: 'experience.languages.english',
  locationKey: 'experience.locations.remote',
  contractKey: 'experience.contracts.fullTime',
};

describe('ExperienceDescriptionHeader', () => {
  it('should render company name', () => {
    renderWithProviders(<ExperienceDescriptionHeader exp={mockExp} />);
    expect(screen.getByText('Botmaker')).toBeInTheDocument();
  });

  it('should render job title', () => {
    renderWithProviders(<ExperienceDescriptionHeader exp={mockExp} />);
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });
});

describe('ExperienceDescriptionBody', () => {
  it('should render date range', () => {
    renderWithProviders(<ExperienceDescriptionBody exp={mockExp} />);
    expect(screen.getByText('March')).toBeInTheDocument();
    expect(screen.getByText('June')).toBeInTheDocument();
    expect(screen.getByText(/2022/)).toBeInTheDocument();
    expect(screen.getByText(/2023/)).toBeInTheDocument();
  });

  it('should render language', () => {
    renderWithProviders(<ExperienceDescriptionBody exp={mockExp} />);
    expect(screen.getByText('English')).toBeInTheDocument();
  });

  it('should render location', () => {
    renderWithProviders(<ExperienceDescriptionBody exp={mockExp} />);
    expect(screen.getByText('Remote')).toBeInTheDocument();
  });

  it('should render contract type', () => {
    renderWithProviders(<ExperienceDescriptionBody exp={mockExp} />);
    expect(screen.getByText('Full-Time Employee')).toBeInTheDocument();
  });
});
