import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
  ];

  return (
    <div className="btn-group btn-group-sm" role="group" aria-label="Language selector">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`btn ${i18n.language === code ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => i18n.changeLanguage(code)}
          title={label}
          aria-pressed={i18n.language === code}
          style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', fontWeight: 'bold' }}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
