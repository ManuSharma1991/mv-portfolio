// src/components/AboutMeSection.tsx
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Avatar,
    Grid,
} from '@mui/material';
import { motion } from 'framer-motion';

// Import your profile picture from the assets folder
import profilePicture from '../assets/profilePic.jpg';

const AboutMeSection: React.FC = () => {
    return (
        <Box
            id="about-me"
            sx={{
                py: { xs: 6, md: 8 },
                background: (theme) =>
                    theme.palette.mode === 'dark'
                        ? `linear-gradient(180deg,
                            rgba(14,165,233,0.045) 0px,
                            ${theme.palette.background.paper}f2 80px,
                            ${theme.palette.background.paper}f2 100%)`
                        : theme.palette.background.paper,
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                >
                    <Typography
                        variant="h2"
                        component="h2"
                        gutterBottom
                        textAlign="center"
                        sx={{
                            mb: 1,
                            fontWeight: 'bold',
                            '&::after': {
                                content: '""',
                                display: 'block',
                                width: 56,
                                height: 3,
                                borderRadius: 2,
                                backgroundColor: 'secondary.main',
                                mx: 'auto',
                                mt: 1.5,
                            },
                        }}
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
                </motion.div>

                <Grid container spacing={4} alignItems="center">
                    {/* Avatar */}
                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <Avatar
                                alt="Manu Viswanadha"
                                src={profilePicture}
                                sx={{
                                    width: { xs: 180, sm: 200, md: 220 },
                                    height: { xs: 180, sm: 200, md: 220 },
                                    border: (theme) => `4px solid ${theme.palette.secondary.main}`,
                                    boxShadow: (theme) => `0 8px 32px ${theme.palette.secondary.main}30`,
                                }}
                            />
                        </motion.div>
                    </Grid>

                    {/* Text */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <motion.div
                            initial={{ opacity: 0, x: 32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                        >
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
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutMeSection;