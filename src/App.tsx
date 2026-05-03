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
  const isDark = colorMode === 'dark';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={globalStyles} />

      <Navigation colorMode={colorMode} onToggleColorMode={onToggleColorMode} />
      <ScrollProgressBar />
      <SectionMinimap />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // Global dot-grid canvas visible behind every section
          ...(isDark && {
            position: 'relative',
            backgroundImage:
              'radial-gradient(rgba(14,165,233,0.055) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              // Subtle vignette for depth: lighter center, darker edges
              background:
                'radial-gradient(120% 120% at 50% 42%, rgba(8,15,28,0) 38%, rgba(8,15,28,0.34) 100%)',
              zIndex: 0,
            },
            '& > *': {
              position: 'relative',
              zIndex: 1,
            },
          }),
        }}
      >
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