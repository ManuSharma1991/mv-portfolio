import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const roles = [
    'Platform & Infrastructure Engineer',
    'Self-Hosting Specialist',
    'SRE Practitioner',
    'Full-Stack Developer',
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } },
};

const badgeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const HeroSection: React.FC = () => {
    // Function to handle scroll for the CTA button, similar to Navigation
    const handleScrollToShowcase = () => {
        const element = document.getElementById('showcase');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Box
            id="hero" // ID for navigation scrolling
            sx={{
                background: (theme) => `radial-gradient(circle at 15% 20%, ${theme.palette.secondary.main}33, transparent 35%), radial-gradient(circle at 85% 80%, ${theme.palette.primary.light}44, transparent 40%), ${theme.palette.primary.main}`,
                color: 'primary.contrastText',   // Uses contrast text color from your theme
                py: { xs: 10, sm: 12, md: 15 },    // Responsive vertical padding
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: '80vh', md: '75vh' }, // Ensure it takes up a good portion of the viewport
                // You can add a background image or pattern here if desired
                // backgroundImage: 'url(/path/to/your/image.jpg)',
                // backgroundSize: 'cover',
                // backgroundPosition: 'center',
                overflow: 'hidden',
            }}
        >
            <Container
                maxWidth="md"
                component={motion.div}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Typography
                    variant="h1" // Mapped to h2 in theme.ts, but semantically h1 for the page
                    component="h1" // Ensures it's an h1 tag for SEO
                    gutterBottom
                    sx={{
                        fontWeight: 'bold',
                        mb: { xs: 2, md: 3 },
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' } // Responsive font size
                    }}
                >
                    I build self-hosted infrastructure that runs like production — on hardware you own.
                </Typography>

                <Stack
                    component={motion.div}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={1.25}
                    sx={{ mb: 3.5 }}
                >
                    {roles.map((role) => (
                        <motion.span
                            key={role}
                            variants={badgeVariants}
                            style={{
                                display: 'inline-block',
                                padding: '5px 16px',
                                borderRadius: '999px',
                                border: '1px solid',
                                borderColor: 'rgba(255,255,255,0.45)',
                                color: 'inherit',
                                opacity: 1,
                                fontSize: 'clamp(0.78rem, 2vw, 0.875rem)',
                                fontWeight: 600,
                                letterSpacing: '0.03em',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {role}
                        </motion.span>
                    ))}
                </Stack>

                <Typography
                    variant="h5" // Mapped to h5 in theme.ts
                    component="p"  // Render as a p tag
                    sx={{
                        mb: { xs: 4, md: 5 },
                        lineHeight: 1.7,
                        opacity: 0.9, // Slightly less prominent than the headline
                        maxWidth: '750px', // Limit width of tagline for readability
                        mx: 'auto' // Center the tagline block
                    }}
                >
                    My homelab runs 40+ services across Proxmox, Docker, and bare metal — with real monitoring,
                    air-gapped backups, and a runbook for every failure mode.
                    That same reliability mindset is what I bring to every platform I design.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary" // Uses secondary color from your theme
                    size="large"
                    href="#showcase"
                    onClick={handleScrollToShowcase}
                    // If using react-scroll:
                    // component={ScrollLink}
                    // to="contact"
                    // smooth={true}
                    // duration={500}
                    // offset={-70} // Adjust offset based on your AppBar height
                    sx={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        padding: { xs: '12px 28px', sm: '15px 35px' },
                        fontSize: { xs: '1rem', sm: '1.1rem' },
                        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: (theme) => `0 4px 20px ${theme.palette.secondary.dark}40`, // Subtle glow
                        }
                    }}
                >
                    See My Work
                </Button>
            </Container>
        </Box>
    );
};

export default HeroSection;