// src/App.tsx
import { Box } from '@mui/material';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ExpertiseSection from './components/ExpertiseSection/ExpertiseSection';
import WhyWorkWithMeSection from './components/WhyWorkWithMeSection';
import AboutMeSection from './components/AboutMeSection';
import ShowcaseSection from './components/ShowcaseSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // <-- IMPORT
import ScrollProgressBar from './components/ScrollProgressBar';
import SectionMinimap from './components/SectionMiniMap';

const globalStyles = {
  'html': {
    scrollBehavior: 'smooth',
  },
  '*[id]': {
    scrollMarginTop: '70px', // Adjust based on your AppBar height
  },
};

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={globalStyles} />

      <Navigation />
      <ScrollProgressBar />
      <SectionMinimap />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <HeroSection />
        <ExpertiseSection />
        <WhyWorkWithMeSection />
        <AboutMeSection />
        <ShowcaseSection />
        <ContactSection />
      </Box>

      <Footer />
      <ScrollToTopButton /> {/* <-- ADD THE COMPONENT HERE */}
    </Box>
  );
}

export default App;