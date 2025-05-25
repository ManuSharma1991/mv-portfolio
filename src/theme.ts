// src/theme.ts
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, blueGrey, lightBlue } from '@mui/material/colors';

// A custom theme for your portfolio landing page
let theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[800],
            dark: blueGrey[900],
            light: blueGrey[700],
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
            default: '#f4f7f9',
            paper: '#ffffff',
        },
        text: {
            primary: blueGrey[900],
            secondary: blueGrey[700],
            disabled: blueGrey[500],
        },
    },
    typography: {
        fontFamily: [
            '"Roboto"', // Specify Roboto first
            '"Helvetica Neue"', // Common fallbacks
            'Arial',
            'sans-serif',
        ].join(','),
        // You can specify different weights if needed, but @fontsource typically handles this
        // Ensure the weights you use (e.g., h1: fontWeight: 700) are imported from @fontsource/roboto
        h1: {
            fontWeight: 700, // Ensure @fontsource/roboto/700.css is imported
            fontSize: '2.8rem',
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 700, // Ensure @fontsource/roboto/700.css is imported
            fontSize: '2.2rem',
            lineHeight: 1.25,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
        },
        h3: {
            fontWeight: 600, // @fontsource/roboto/600.css or 500.css often maps to this
            fontSize: '1.8rem',
            lineHeight: 1.3,
        },
        // ... other typography settings (adjust fontWeight as needed and ensure corresponding @fontsource imports)
        body1: {
            fontWeight: 400, // Ensure @fontsource/roboto/400.css is imported
            fontSize: '1rem',
            lineHeight: 1.7,
        },
        button: {
            textTransform: 'none',
            fontWeight: 500, // Ensure @fontsource/roboto/500.css is imported
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
        MuiAppBar: {
            // ...
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

export default theme;