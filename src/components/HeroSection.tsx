import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const roles = [
    'Platform & Infrastructure Engineer',
    'Self-Hosting Specialist',
    'SRE Practitioner',
    'Full-Stack Developer',
];

const stats = [
    { value: '40+', label: 'Services' },
    { value: '5', label: 'Infra Nodes' },
    { value: '24/7', label: 'Monitored' },
    { value: '100%', label: 'Self-Hosted' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const fadeUpVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } },
};

const badgeContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.55 } },
};

const badgeVariant = {
    hidden: { opacity: 0, scale: 0.85, y: 8 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

const HeroSection: React.FC = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <Box
            id="hero"
            sx={{
                position: 'relative',
                overflow: 'hidden',
                background: (theme) =>
                    theme.palette.mode === 'dark'
                        ? 'linear-gradient(160deg, #0d1b2a 0%, #162032 60%, #0a1520 100%)'
                        : 'linear-gradient(160deg, #1c313a 0%, #263238 60%, #1a2a34 100%)',
                color: 'primary.contrastText',
                py: { xs: 12, sm: 14, md: 18 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: '90vh', md: '88vh' },
            }}
        >
            {/* Animated radial glow blobs */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: (theme) =>
                        `radial-gradient(circle at 18% 22%, ${theme.palette.secondary.main}28 0%, transparent 42%),
                         radial-gradient(circle at 82% 76%, ${theme.palette.primary.light}1a 0%, transparent 42%),
                         radial-gradient(circle at 55% 5%, ${theme.palette.secondary.dark}18 0%, transparent 32%)`,
                    animation: 'heroBlobPulse 10s ease-in-out infinite alternate',
                    '@keyframes heroBlobPulse': {
                        '0%': { opacity: 0.65, transform: 'scale(1)' },
                        '100%': { opacity: 1, transform: 'scale(1.05)' },
                    },
                }}
            />

            {/* Subtle dot grid overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.045,
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', textAlign: 'center' }}>
                <motion.div variants={containerVariants} initial="hidden" animate="visible">

                    {/* Greeting */}
                    <motion.div variants={fadeUpVariant}>
                        <Typography
                            component="p"
                            sx={{
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                fontWeight: 500,
                                letterSpacing: '0.16em',
                                textTransform: 'uppercase',
                                opacity: 0.6,
                                mb: 0.75,
                            }}
                        >
                            Hi, I'm
                        </Typography>
                    </motion.div>

                    {/* Name */}
                    <motion.div variants={fadeUpVariant}>
                        <Typography
                            component="h1"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: '2.8rem', sm: '3.8rem', md: '4.6rem' },
                                lineHeight: 1.05,
                                mb: 3,
                                letterSpacing: '-0.015em',
                                background: (theme) =>
                                    `linear-gradient(130deg, #ffffff 35%, ${theme.palette.secondary.light} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}
                        >
                            Manu Viswanadha
                        </Typography>
                    </motion.div>

                    {/* Role badges */}
                    <Stack
                        component={motion.div}
                        variants={badgeContainerVariants}
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        gap={1.25}
                        sx={{ mb: 4.5 }}
                    >
                        {roles.map((role) => (
                            <motion.span
                                key={role}
                                variants={badgeVariant}
                                style={{
                                    display: 'inline-block',
                                    padding: '5px 16px',
                                    borderRadius: '999px',
                                    border: '1px solid rgba(255,255,255,0.22)',
                                    background: 'rgba(255,255,255,0.07)',
                                    backdropFilter: 'blur(6px)',
                                    color: 'inherit',
                                    fontSize: 'clamp(0.71rem, 1.7vw, 0.82rem)',
                                    fontWeight: 600,
                                    letterSpacing: '0.03em',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {role}
                            </motion.span>
                        ))}
                    </Stack>

                    {/* Headline */}
                    <motion.div variants={fadeUpVariant}>
                        <Typography
                            component="h2"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: '1.45rem', sm: '1.8rem', md: '2.15rem' },
                                lineHeight: 1.38,
                                mb: 2,
                                opacity: 0.95,
                                maxWidth: 680,
                                mx: 'auto',
                            }}
                        >
                            I build self-hosted infrastructure that runs like production.
                        </Typography>
                    </motion.div>

                    {/* Tagline */}
                    <motion.div variants={fadeUpVariant}>
                        <Typography
                            component="p"
                            sx={{
                                mb: { xs: 4.5, md: 5 },
                                lineHeight: 1.75,
                                opacity: 0.68,
                                maxWidth: 560,
                                mx: 'auto',
                                fontSize: { xs: '1rem', sm: '1.07rem' },
                            }}
                        >
                            Real-time monitoring. Air-gapped backups. A runbook for every failure mode.
                            That reliability mindset is what I bring to every platform I design.
                        </Typography>
                    </motion.div>

                    {/* Stats strip */}
                    <motion.div variants={fadeUpVariant}>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            flexWrap="wrap"
                            gap={{ xs: 3, sm: 5 }}
                            sx={{
                                mb: 5,
                                py: 2.5,
                                px: { xs: 1, sm: 0 },
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                            }}
                        >
                            {stats.map((stat) => (
                                <Box key={stat.label} sx={{ textAlign: 'center' }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '1.6rem', sm: '2rem' },
                                            fontWeight: 800,
                                            lineHeight: 1,
                                            color: 'secondary.light',
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.7rem',
                                            opacity: 0.58,
                                            letterSpacing: '0.07em',
                                            textTransform: 'uppercase',
                                            mt: 0.5,
                                        }}
                                    >
                                        {stat.label}
                                    </Typography>
                                </Box>
                            ))}
                        </Stack>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div variants={fadeUpVariant}>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                endIcon={<ArrowForwardIcon />}
                                onClick={() => scrollTo('showcase')}
                                sx={{
                                    fontWeight: 700,
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    borderRadius: '8px',
                                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        boxShadow: (theme) => `0 10px 30px ${theme.palette.secondary.main}60`,
                                    },
                                }}
                            >
                                View My Work
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                endIcon={<EmailOutlinedIcon />}
                                onClick={() => scrollTo('contact')}
                                sx={{
                                    fontWeight: 700,
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    borderRadius: '8px',
                                    borderColor: 'rgba(255,255,255,0.32)',
                                    color: 'rgba(255,255,255,0.88)',
                                    transition: 'transform 0.2s ease, background 0.2s ease, border-color 0.2s ease',
                                    '&:hover': {
                                        borderColor: 'rgba(255,255,255,0.85)',
                                        background: 'rgba(255,255,255,0.09)',
                                        transform: 'translateY(-3px)',
                                    },
                                }}
                            >
                                Get In Touch
                            </Button>
                        </Stack>
                    </motion.div>

                </motion.div>
            </Container>
        </Box>
    );
};

export default HeroSection;