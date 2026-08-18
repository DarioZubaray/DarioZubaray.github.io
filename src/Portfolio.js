import React from 'react';
import { AppRouter } from './router/AppRouter';
import { ThemeProvider } from './context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './theme.css';
import './portfolio.css';

export const Portfolio = () => {
    return (
        <ThemeProvider>
            <AppRouter />
        </ThemeProvider>
    )
}
