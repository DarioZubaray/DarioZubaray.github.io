import React from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import i18n from './i18n';

export const renderWithProviders = (component, options = {}) => {
  const { route = '/' } = options;
  return render(
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={[route]}>
          {component}
        </MemoryRouter>
      </I18nextProvider>
    </ThemeProvider>
  );
};
