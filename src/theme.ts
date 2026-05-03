// src/theme.ts
import { createTheme, responsiveFontSizes, type PaletteMode } from '@mui/material/styles';
import { red, blueGrey, lightBlue } from '@mui/material/colors';

export const createAppTheme = (mode: PaletteMode = 'light') => {
    const isDark = mode === 'dark';

    let theme = createTheme({
        palette: {
            mode,
            primary: {
                main: isDark ? blueGrey[500] : blueGrey[800],
                dark: isDark ? blueGrey[700] : blueGrey[900],
                light: isDark ? blueGrey[300] : blueGrey[700],
                contrastText: '#ffffff',
            },
            secondary: {
                main: lightBlue[600],
                light: lightBlue[400],
                dark: lightBlue[800],
                contrastText: '#ffffff',
            },
            error: {
                main: red.A400,
            },
            background: {
                default: isDark ? '#0f1720' : '#f4f7f9',
                paper: isDark ? '#18212b' : '#ffffff',
            },
            text: {
                primary: isDark ? '#e6edf3' : blueGrey[900],
                secondary: isDark ? '#b7c4cf' : blueGrey[700],
                disabled: isDark ? '#708090' : blueGrey[500],
            },
        },
        typography: {
            fontFamily: [
                '"Roboto"',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
            ].join(','),
            h1: {
                fontWeight: 700,
                fontSize: '2.8rem',
                lineHeight: 1.2,
            },
            h2: {
                fontWeight: 700,
                fontSize: '2.2rem',
                lineHeight: 1.25,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
            },
            h3: {
                fontWeight: 600,
                fontSize: '1.8rem',
                lineHeight: 1.3,
            },
            body1: {
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: 1.7,
            },
            button: {
                textTransform: 'none',
                fontWeight: 500,
            },
        },
        spacing: 8,
        shape: {
            borderRadius: 8,
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableElevation: true,
                },
            },
            MuiPaper: {
                defaultProps: {
                    elevation: 2,
                },
            },
            MuiContainer: {
                defaultProps: {
                    maxWidth: 'lg',
                },
            },
            MuiLink: {
                defaultProps: {
                    underline: 'hover',
                },
            },
        },
    });

    theme = responsiveFontSizes(theme);
    return theme;
};