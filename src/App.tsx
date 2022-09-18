import React, { Suspense } from 'react';
import './App.css';
import RouteComponent from 'routes';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#93dbc5',
    },
  },
});

function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouteComponent />
        </Suspense>
      </ThemeProvider>
    </CssBaseline>
  );
}

export default App;
