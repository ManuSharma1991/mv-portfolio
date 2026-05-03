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
                    Platform Engineer. SRE Practitioner. Full-Stack Developer.
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
                        <Box>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{ lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.05rem' } }}
                            >
                                I build and operate self-hosted platforms that behave like production systems — with a focus on reliability, recovery, and long-term maintainability.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{ lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.05rem' } }}
                            >
                                My work sits at the intersection of platform engineering and application development. I run a multi-service environment built on Proxmox, Docker, and secure ingress, with real monitoring, backup workflows, and failure-tested runbooks. Alongside infrastructure, I build full-stack applications when product interfaces are needed — carrying the same operational discipline through to the application layer.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutMeSection;