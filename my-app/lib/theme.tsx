"use client";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useMemo } from 'react';

export function AppThemeProvider({ children, locale }: { children: React.ReactNode; locale: string }) {
  const theme = useMemo(
    () =>
      createTheme({
        direction: locale === 'ar' ? 'rtl' : 'ltr',
        palette: {
          mode: 'light',
          primary: {
            main: '#3b82f6',
            light: '#60a5fa',
            dark: '#2563eb',
          },
          secondary: {
            main: '#8b5cf6',
            light: '#a78bfa',
            dark: '#7c3aed',
          },
          background: {
            default: '#f8fafc',
            paper: '#ffffff',
          },
        },
        typography: {
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: '12px',
                padding: '10px 24px',
                fontWeight: 500,
              },
            },
          },
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                },
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: '16px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              },
            },
          },
        },
      }),
    [locale]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

