// src/components/AboutMeSection.tsx
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Avatar, // Import Avatar
    Grid,   // Import Grid
} from '@mui/material';

// Import your profile picture from the assets folder
import profilePicture from '../assets/profilePic.jpg'; // <-- ADJUST THE FILENAME HERE

const AboutMeSection: React.FC = () => {
    return (
        <Box
            id="about-me"
            sx={{
                py: { xs: 6, md: 8 },
                backgroundColor: 'background.paper', // Or your preferred background
            }}
        >
            <Container maxWidth="lg"> {/* Changed to lg to give more space for Grid */}
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    sx={{ mb: 2, fontWeight: 'bold' }}
                >
                    About Me
                </Typography>
                <Typography
                    variant="h5"
                    component="h3"
                    textAlign="center"
                    color="text.secondary"
                    sx={{ mb: { xs: 4, md: 6 }, fontWeight: 500 }}
                >
                    My Journey: From IT Roots to a Passion for Self-Hosted Solutions
                </Typography>

                <Grid container spacing={4} alignItems="center"> {/* Use Grid for layout */}
                    {/* Grid Item for Avatar */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar
                            alt="Manu Viswanadha" // Important for accessibility
                            src={profilePicture}    // Your imported image
                            sx={{
                                width: { xs: 180, sm: 200, md: 220 }, // Responsive avatar size
                                height: { xs: 180, sm: 200, md: 220 },
                                border: (theme) => `4px solid ${theme.palette.primary.light}`, // Optional border
                                boxShadow: 3, // Optional subtle shadow
                            }}
                        />
                    </Grid>

                    {/* Grid Item for Text */}
                    <Grid size={{ xs: 12, md: 8 }}> {/* Takes up 8 out of 12 columns on medium screens and up */}
                        <Box> {/* Optional Box wrapper for text if needed for more specific styling */}
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    lineHeight: 1.8,
                                    fontSize: { xs: '1rem', md: '1.1rem' }, // Slightly larger on bigger screens
                                    textAlign: 'justify',
                                    hyphens: 'auto',
                                }}
                            >
                                My journey with technology is one of continuous learning, practical application, and a genuine passion for building things that work.
                                After an initial period in the IT industry, my path took a different turn for a few years, but my fascination with coding and system building never faded.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    lineHeight: 1.8,
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    textAlign: 'justify',
                                    hyphens: 'auto',
                                }}
                            >
                                More recently, I've dived back into my technical passions headfirst, focusing on MERN stack development and the fascinating world of DevOps and self-hosting.
                                This isn't just theoretical for me; I've built and continue to expand my own homelab server environment from the ground up.
                                There's immense satisfaction in this – like setting up a media server that allows a friend overseas to access our favorite TV shows, or providing a personal 1TB cloud storage solution for my brother.
                                These personal projects are where I rigorously hone my skills with Docker, Linux administration, and network configuration.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    lineHeight: 1.8,
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    textAlign: 'justify',
                                    hyphens: 'auto',
                                    mb: 0, // Remove bottom margin from the last paragraph if needed
                                }}
                            >
                                This hands-on, problem-solving approach is what I bring to my freelance work. I'm committed to leveraging these modern skills to create valuable, efficient, and reliable web solutions for my clients.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutMeSection;