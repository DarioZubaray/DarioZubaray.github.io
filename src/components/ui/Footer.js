import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg bg-dark text-light text-center">
            <div className="container py-2">
                <h3 className="text-light">&copy; Dario Zubaray Portfolio</h3>
                <p>2014 - {new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}
