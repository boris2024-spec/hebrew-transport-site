import { createTheme, ThemeOptions } from '@mui/material/styles';
import { heIL } from '@mui/material/locale';

// Цвета для транспортной компании
const colors = {
    primary: {
        main: '#ffcc00ff', // Оранжевый
        light: '#ffb74d',
        dark: '#f57c00',

    },
    secondary: {
        main: '#333333', // Темный черный
        light: '#555555',
        dark: '#1a1a1a',
    },
    background: {
        light: '#f5f5f5',
        dark: '#121212',
    },
};

// Базовая конфигурация темы
const baseTheme: ThemeOptions = {
    direction: 'rtl', // Справа налево для иврита
    typography: {
        fontFamily: '"Roboto", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.5,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    direction: 'rtl',
                    fontFamily: '"Roboto", "Arial", sans-serif',
                },
                body: {
                    direction: 'rtl',
                },
                '*': {
                    '&::-webkit-scrollbar': {
                        width: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        backgroundColor: 'rgba(0,0,0,0.1)',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderRadius: '4px',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    padding: '10px 20px',
                    '&:focus-visible': {
                        outline: '2px solid',
                        outlineOffset: '2px',
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                },
            },
        },
    },
};

// Светлая тема
export const lightTheme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'light',
        primary: colors.primary,
        secondary: colors.secondary,
        background: {
            default: '#ffffff',
            paper: '#ffffff',
            
        },
        text: {
            primary: '#2c2c2c',
            secondary: '#666666',
        },
    },
}, heIL);

// Темная тема
export const darkTheme = createTheme({
    ...baseTheme,
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffcc00ff', // Яркий оранжевый
            light: '#555555',
            dark: '#1a1a1a',
        },
        secondary: {
            main: '#ffb74d',
            light: '#ffcc02',
            dark: '#ff9800',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffff',
            secondary: '#cccccc',
        },
    },
}, heIL);
