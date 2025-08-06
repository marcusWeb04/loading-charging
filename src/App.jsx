// src/App.jsx
import React from 'react';
import { ThemeProvider } from './service/ThemeSwitcher';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
