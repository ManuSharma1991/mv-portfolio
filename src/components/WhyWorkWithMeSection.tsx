import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const gridContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';

interface Principle {
    icon: React.ElementType;
    title: string;
    body: string;
}

const principles: Principle[] = [
    {
        icon: ShieldOutlinedIcon,
        title: 'Designed for Failure, Not Just Success',
        body: "Every system I build assumes failure will happen — disk issues, network drops, service crashes. That’s why I design with isolation, recovery paths, and backup-first architecture from day one.",
    },
    {
        icon: MonitorHeartOutlinedIcon,
        title: 'Operational by Default',
        body: "I don’t stop at deployment. Every platform includes monitoring, alerting, logging, and runbooks — so it can be operated, not just launched.",
    },
    {
        icon: AccountTreeOutlinedIcon,
        title: 'Controlled Complexity',
        body: 'Instead of stacking tools blindly, I design systems with clear boundaries — ingress, compute, storage, and observability — keeping things understandable and maintainable as they grow.',
    },
    {
        icon: DnsOutlinedIcon,
        title: 'Real Systems, Not Demos',
        body: 'My work runs continuously — serving media, managing data, handling authentication — with real uptime and recovery expectations, not just a proof-of-concept.',
    },
];

const WhyWorkWithMeSection: React.FC = () => {
    return (
        <Box
            id="why-work-with-me"
            sx={{
                py: { xs: 6, md: 8 },
                backgroundColor: 'alternateBackground.main',
            }}
        >
            <Container maxWidth="lg">
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
                    How I Build Reliable Systems
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ mb: { xs: 4, md: 6 }, maxWidth: 620, mx: 'auto' }}
                >
                    Principles I apply to every platform I design — whether it’s a homelab service or a production deployment.
                </Typography>

                <Grid
                    container
                    spacing={3}
                    component={motion.div}
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {principles.map((p) => {
                        const Icon = p.icon;
                        return (
                            <Grid key={p.title} size={{ xs: 12, sm: 6 }} component={motion.div} variants={cardVariants}>
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: { xs: 2.5, md: 3 },
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: 1.5,
                                        borderLeft: '3px solid',
                                        borderColor: 'secondary.main',
                                        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: (theme) => theme.shadows[6],
                                        },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                        <Icon sx={{ color: 'secondary.main', fontSize: '1.75rem', flexShrink: 0 }} />
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                                            {p.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                                        {p.body}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default WhyWorkWithMeSection;
