import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="text-center" style={{ backgroundColor: 'var(--bg-footer)', color: 'var(--text-on-dark)' }}>
            <div className="container py-2">
                <h3 style={{ color: 'var(--text-on-dark)' }}>{t('footer.copyright')}</h3>
                <p style={{ color: 'var(--text-on-dark-muted)' }}>{t('footer.years', { year: new Date().getFullYear() })}</p>
            </div>
        </footer>
    )
}
