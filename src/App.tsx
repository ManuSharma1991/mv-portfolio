// src/App.tsx
import { Box } from '@mui/material';
import type { PaletteMode } from '@mui/material';

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
import AnimatedSection from './components/AnimatedSection';
import HomelabArchitectureSection from './components/HomelabArchitectureSection';

interface AppProps {
  colorMode: PaletteMode;
  onToggleColorMode: () => void;
}

const globalStyles = {
  'html': {
    scrollBehavior: 'smooth',
  },
  '*[id]': {
    scrollMarginTop: '70px', // Adjust based on your AppBar height
  },
};

function App({ colorMode, onToggleColorMode }: AppProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={globalStyles} />

      <Navigation colorMode={colorMode} onToggleColorMode={onToggleColorMode} />
      <ScrollProgressBar />
      <SectionMinimap />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <AnimatedSection>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection delay={0.05}>
          <ShowcaseSection />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ExpertiseSection />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <WhyWorkWithMeSection />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <AboutMeSection />
        </AnimatedSection>
        <AnimatedSection delay={0.25}>
          <HomelabArchitectureSection />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <ContactSection />
        </AnimatedSection>
      </Box>

      <Footer />
      <ScrollToTopButton /> {/* <-- ADD THE COMPONENT HERE */}
    </Box>
  );
}

export default App;