import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { ThemeProvider } from './hooks/useTheme';
import { useTheme } from './hooks/useTheme';
import { lightTheme, darkTheme } from './theme/theme';
import Header from './components/Header';
import FooterSimple from './components/FooterSimple';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import InfoPage from './pages/TestPage';
import ContactPage from './pages/TestPage';
import { Box } from '@mui/material';

// RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div dir="rtl">
          <Router>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              direction: 'rtl'
            }}>
              <Header />
              <Box component="main" sx={{ flexGrow: 1 }}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/booking" element={<BookingPage />} />
                  <Route path="/info" element={<InfoPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                </Routes>
              </Box>
              <FooterSimple />
            </Box>
          </Router>
        </div>
      </MuiThemeProvider>
    </CacheProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
