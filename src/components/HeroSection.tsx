import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
// If using react-scroll for the button, you'd import its Link component
// import { Link as ScrollLink } from 'react-scroll';

const HeroSection: React.FC = () => {
    // Function to handle scroll for the CTA button, similar to Navigation
    const handleScrollToContact = () => {
        const element = document.getElementById('contact'); // ID of your ContactSection
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <Box
            id="hero" // ID for navigation scrolling
            sx={{
                backgroundColor: 'primary.main', // Uses primary color from your theme
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
            }}
        >
            <Container maxWidth="md"> {/* Constrains the width of the content */}
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
                    Manu Viswanadha: MERN Stack Development & Self-Hosted Solutions – Tailored to Your Needs.
                </Typography>
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
                    Building intuitive web experiences with the MERN stack and offering robust self-hosting expertise.
                    My approach involves rapidly grasping your project needs to propose versatile and efficient solutions tailored for you.
                </Typography>
                <Button
                    variant="contained"
                    color="secondary" // Uses secondary color from your theme
                    size="large"
                    href="#contact"
                    onClick={handleScrollToContact}
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
                    Let's Find Your Solution
                </Button>
            </Container>
        </Box>
    );
};

export default HeroSection;