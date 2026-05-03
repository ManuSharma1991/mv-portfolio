// src/components/ExpertiseSection/ExpertiseSection.tsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import DnsIcon from '@mui/icons-material/Dns';

import ExpertiseCard, { type ExpertiseAreaProps } from './ExpertiseCard';

const expertiseData: ExpertiseAreaProps[] = [
    {
        icon: DnsIcon,
        title: 'Proxmox Platform Engineering & SRE',
        description: 'My primary expertise is building and operating resilient self-hosted platforms with production SRE practices:',
        points: [
            {
                subTitle: 'Virtualization & Service Topology:',
                details: [
                    'Design and operation of Proxmox VE clusters with role-driven LXC/VM segmentation and deterministic startup dependencies.',
                    'GPU render-node sharing for media and ML workloads while preserving host-level control and stability.',
                    'Dedicated backup plane via Proxmox Backup Server with recovery-oriented operating procedures.',
                ],
            },
            {
                subTitle: 'Storage & Data Reliability:',
                details: [
                    'ZFS pool operations, scrub strategy, snapshot workflows, and import recovery procedures.',
                    'Unified storage namespace using mergerfs with parity-focused protection strategies for large media datasets.',
                    'Capacity and performance planning across mixed SSD/HDD storage profiles.',
                ],
            },
            {
                subTitle: 'Operational Excellence (SRE):',
                details: [
                    'End-to-end observability using centralized logs, health checks, metrics, and service-level status reporting.',
                    'Incident response playbooks for service recovery, storage failures, and network degradation events.',
                    'Infrastructure automation with GitHub Actions and Ansible-driven operational routines.',
                ],
            },
        ],
    },
    {
        icon: BuildIcon,
        title: 'Security, Networking & Platform Operations',
        description: 'I build secure, maintainable network and platform foundations for self-hosted systems:',
        points: [
            {
                subTitle: 'Network Segmentation & Traffic Control:',
                details: [
                    'VLAN-based segmentation for workload isolation and blast-radius reduction.',
                    'Virtualized gateway routing and policy enforcement across heterogeneous services.',
                    'Service exposure models balancing private/internal and public access boundaries.',
                ],
            },
            {
                subTitle: 'Identity, Access & Perimeter Security:',
                details: [
                    'SSO-based access patterns for administrative and user-facing applications.',
                    'Reverse-proxy and TLS lifecycle management for secure ingress and certificate hygiene.',
                    'Threat monitoring and automated enforcement for common attack vectors.',
                ],
            },
            {
                subTitle: 'Runbooks & Platform Maintainability:',
                details: [
                    'Documented operational runbooks for routine maintenance, emergency recovery, and onboarding.',
                    'Controlled change management with roll-forward/rollback thinking and service impact awareness.',
                    'Pragmatic, reliability-first decisions that keep systems stable under growth.',
                ],
            },
        ],
    },
    {
        icon: CodeIcon,
        title: 'MERN Application Development',
        description: 'Alongside platform engineering, I build full-stack web products with MERN when application delivery is part of the engagement:',
        points: [
            {
                subTitle: 'Frontend Engineering (React + TypeScript):',
                details: [
                    'Responsive UI development with component-driven architecture and performance-aware rendering.',
                    'Dashboard and workflow-oriented interfaces for operational and productivity use cases.',
                    'Accessible interaction patterns with maintainable design systems.',
                ],
            },
            {
                subTitle: 'Backend APIs (Node.js + Express):',
                details: [
                    'REST API design, validation, and service integration with clear operational boundaries.',
                    'Container-friendly deployment patterns for predictable runtime behavior.',
                ],
            },
            {
                subTitle: 'Data Layer (MongoDB):',
                details: [
                    'Practical schema design for application features and operational reporting needs.',
                    'Data modeling choices that support incremental product evolution.',
                ],
            },
        ],
    },
];

const ExpertiseSection: React.FC = () => {
    return (
        <Box
            id="expertise"
            sx={{
                py: { xs: 6, md: 8 },
                background: (theme) =>
                    theme.palette.mode === 'dark'
                        ? `linear-gradient(180deg,
                            rgba(14,165,233,0.05) 0px,
                            ${theme.palette.background.default}f0 80px,
                            ${theme.palette.background.default}f0 100%)`
                        : theme.palette.background.default,
            }}
        >
            <Container maxWidth="md"> {/* Using "md" for better readability in a single column */}
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    sx={{
                        mb: { xs: 4, md: 6 },
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
                    My Expertise
                </Typography>

                {expertiseData.map((area, index) => (
                    <motion.div
                        key={area.title}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
                        style={{ marginBottom: index < expertiseData.length - 1 ? 32 : 0 }}
                    >
                        <ExpertiseCard
                            icon={area.icon}
                            title={area.title}
                            description={area.description}
                            points={area.points}
                        />
                    </motion.div>
                ))}
            </Container>
        </Box>
    );
};

export default ExpertiseSection;