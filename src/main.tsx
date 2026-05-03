// src/main.tsx (for Vite) or src/index.tsx (for CRA)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createAppTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo, useState } from 'react';
import type { PaletteMode } from '@mui/material';

// Import Roboto font weights from @fontsource
// Import only the weights you actually use in your theme.ts to keep bundle size down.
import '@fontsource/roboto/300.css'; // Light
import '@fontsource/roboto/400.css'; // Regular
import '@fontsource/roboto/500.css'; // Medium
import '@fontsource/roboto/700.css'; // Bold
// If you need italic versions, import them as well:
// import '@fontsource/roboto/400-italic.css';

import './styles/global.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

const RootApp: React.FC = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  const toggleMode = () => {
    setMode((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App colorMode={mode} onToggleColorMode={toggleMode} />
    </ThemeProvider>
  );
};

root.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>
);