import React from 'react';

export const Footer = () => {
    return (
        <footer className="text-center" style={{ backgroundColor: 'var(--bg-footer)', color: 'var(--text-on-dark)' }}>
            <div className="container py-2">
                <h3 style={{ color: 'var(--text-on-dark)' }}>&copy; Dario Zubaray Portfolio</h3>
                <p style={{ color: 'var(--text-on-dark-muted)' }}>2014 - {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}
