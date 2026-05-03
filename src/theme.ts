// src/theme.ts
import { createTheme, responsiveFontSizes, type PaletteMode, type Theme } from '@mui/material/styles';
import { red, blueGrey } from '@mui/material/colors';

// Augment MUI palette to include alternateBackground
declare module '@mui/material/styles' {
    interface Palette {
        alternateBackground: { main: string };
    }
    interface PaletteOptions {
        alternateBackground?: { main?: string };
    }
    interface TypeBackground {
        alternate: string;
    }
}

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
                // Sky-500 family — more vivid than lightBlue[600]
                main: isDark ? '#0ea5e9' : '#0284c7',
                light: '#38bdf8',
                dark: '#0369a1',
                contrastText: '#ffffff',
            },
            error: {
                main: red.A400,
            },
            alternateBackground: {
                main: isDark ? '#040c18' : '#e8edf4',
            },
            background: {
                // Deep navy-slate palette — distinct layers
                default: isDark ? '#080f1c' : '#f0f4f8',
                paper: isDark ? '#0e1d2f' : '#ffffff',
                alternate: isDark ? '#040c18' : '#e8edf4',
            },
            text: {
                primary: isDark ? '#f1f5f9' : blueGrey[900],
                secondary: isDark ? '#94a3b8' : blueGrey[700],
                disabled: isDark ? '#475569' : blueGrey[500],
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
                styleOverrides: {
                    root: {
                        borderRadius: '8px',
                    },
                },
            },
            MuiPaper: {
                defaultProps: {
                    elevation: 2,
                },
                styleOverrides: {
                    root: ({ theme }: { theme: Theme }) => ({
                        backgroundImage: 'none',
                        ...(theme.palette.mode === 'dark' && {
                            border: '1px solid rgba(255,255,255,0.07)',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.5)',
                        }),
                    }),
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: ({ theme }: { theme: Theme }) => ({
                        fontWeight: 500,
                        ...(theme.palette.mode === 'dark' && {
                            borderColor: 'rgba(255,255,255,0.15)',
                        }),
                    }),
                },
            },
            MuiTextField: {
                styleOverrides: {
                    root: ({ theme }: { theme: Theme }) => ({
                        ...(theme.palette.mode === 'dark' && {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(255,255,255,0.15)',
                            },
                        }),
                    }),
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: ({ theme }: { theme: Theme }) => ({
                        ...(theme.palette.mode === 'dark' && {
                            backgroundColor: 'rgba(8,15,28,0.88)',
                            backdropFilter: 'blur(12px)',
                            borderBottom: '1px solid rgba(255,255,255,0.07)',
                            boxShadow: 'none',
                        }),
                    }),
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