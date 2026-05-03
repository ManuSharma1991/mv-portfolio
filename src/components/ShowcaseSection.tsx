import React, { useEffect, useMemo, useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Grid,
    Chip,
    CircularProgress,
    Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import ProxmoxIcon from '../assets/proxmox.svg?react';
import ProxmoxBackupServerIcon from '../assets/proxmox-backup-server.svg?react';
import NginxPMIcon from '../assets/nginx-proxy-manager.svg?react';
import AuthentikIcon from '../assets/authentik.svg?react';
import DockerIcon from '../assets/docker.svg?react';
import ScrutinyIcon from '../assets/scrutiny.svg?react';
import UptimeKumaIcon from '../assets/uptime-kuma.svg?react';
import GiteaIcon from '../assets/gitea.svg?react';
import OpenWrtIcon from '../assets/openwrt.svg?react';
import DozzleIcon from '../assets/dozzle.svg?react';
import BeszelIcon from '../assets/beszel.svg?react';
import AdGuardHomeIcon from '../assets/adguard-home.svg?react';
import WikiJsIcon from '../assets/wikijs.svg?react';
import PaperlessNgxIcon from '../assets/paperless-ngx.svg?react';
import PortainerIcon from '../assets/portainer-dark.svg?react';
import SemaphoreIcon from '../assets/semaphore-dark.svg?react';
import GuacamoleIcon from '../assets/guacamole.svg?react';
import CronicleIcon from '../assets/cronicle.svg?react';

type ProjectStatus = 'Live' | 'Rolling Out' | 'In Development';
type MonitorRuntimeStatus = 'up' | 'down' | 'maintenance' | 'unknown';

type SvgIconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface MonitorBadge {
    id: number;
    label: string;
    name?: string;
    icon?: SvgIconComponent;
}

interface Project {
    icon: SvgIconComponent;
    title: string;
    description: string;
    technologies: string[];
    status: ProjectStatus;
    highlights: string[];
    tags: string[];
    monitorBadges?: MonitorBadge[];
}

const projects: Project[] = [
    {
        icon: ProxmoxIcon,
        title: 'Virtualization & Compute Platform',
        description:
            'A production-style private platform built on Proxmox VE with role-segmented workloads, reliability-focused lifecycle controls, and deterministic service orchestration.',
        technologies: ['Proxmox VE', 'LXC', 'Docker', 'OpenWrt', 'Portainer'],
        status: 'Live',
        highlights: [
            'Role-driven container topology with controlled startup dependencies',
            'Hardware-accelerated workload support via controlled render-node sharing',
            'Infrastructure runbooks for maintenance, rollback, and incident handling',
        ],
        tags: ['SRE', 'Infra', 'Self-Hosting'],
        monitorBadges: [
            { id: 1, label: 'Proxmox Server', icon: ProxmoxIcon },
            { id: 46, label: 'Proxmox Backup Server', icon: ProxmoxBackupServerIcon },
            { id: 48, label: 'Docker', icon: DockerIcon },
        ],
    },
    {
        icon: NginxPMIcon,
        title: 'Secure Gateway & Identity Plane',
        description:
            'A hardened ingress and authentication layer for private/public services with centralized TLS termination, policy-driven access, and defensive controls.',
        technologies: ['Nginx Proxy Manager', 'Authentik', 'TLS', 'CrowdSec', 'OpenWRT'],
        status: 'Live',
        highlights: [
            'Centralized ingress for operational and user-facing endpoints',
            'Single sign-on for sensitive workloads via Authentik',
            'Security-first perimeter controls and standardized certificate handling',
        ],
        tags: ['SRE', 'Security', 'Infra'],
        monitorBadges: [
            { id: 17, label: 'Nginx Proxy Manager', icon: NginxPMIcon },
            { id: 18, label: 'Authentik', icon: AuthentikIcon },
            { id: 31, label: 'OpenWRT', icon: OpenWrtIcon },
        ],
    },
    {
        icon: ScrutinyIcon,
        title: 'Storage & Data Protection Fabric',
        description:
            'A mixed-storage architecture combining high-throughput pools and parity-based resilience, exposed through a unified namespace for service consumption.',
        technologies: ['ZFS', 'mergerfs', 'SnapRAID', 'PBS', 'Linux'],
        status: 'Live',
        highlights: [
            'Unified mount strategy for multi-service read/write patterns',
            'Operational recovery workflows for import, scrub, and restore paths',
            'Backup-first design with independent target node',
        ],
        tags: ['SRE', 'Infra', 'Self-Hosting'],
        monitorBadges: [
            { id: 46, label: 'Proxmox Backup Server', name: 'Backup Node', icon: ProxmoxBackupServerIcon },
            { id: 1, label: 'Proxmox Server', name: 'Storage Host', icon: ProxmoxIcon },
        ],
    },
    {
        icon: UptimeKumaIcon,
        title: 'Observability & Operations Mesh',
        description:
            'A consolidated observability layer for logs, health, and service telemetry used for day-to-day operations and incident response.',
        technologies: ['Uptime Kuma', 'Dozzle', 'Beszel', 'AdGuard Home', 'Runbooks'],
        status: 'Live',
        highlights: [
            'Centralized service health visibility across stacks via Uptime Kuma',
            'Real-time container logs with cross-service diagnostics via Dozzle',
            'Action-oriented status workflows for faster recovery',
        ],
        tags: ['SRE', 'DevOps', 'Infra'],
        monitorBadges: [
            { id: 29, label: 'Dozzle', icon: DozzleIcon },
            { id: 44, label: 'Beszel', icon: BeszelIcon },
            { id: 30, label: 'AdGuard Home', icon: AdGuardHomeIcon },
        ],
    },
    {
        icon: GiteaIcon,
        title: 'Private Collaboration & Productivity Stack',
        description:
            'A private suite of self-hosted tools including Wiki.js, Gitea, Paperless-ngx, and Vaultwarden for documentation, source control, document workflows, and secrets management.',
        technologies: ['Wiki.js', 'Gitea', 'Paperless-ngx', 'Vaultwarden', 'Vikunja'],
        status: 'Live',
        highlights: [
            'Knowledge base and operational documentation via Wiki.js',
            'Private code and change management via Gitea',
            'Document ingestion and secure archive via Paperless-ngx',
        ],
        tags: ['Platform', 'Self-Hosting', 'DevOps'],
        monitorBadges: [
            { id: 27, label: 'Wiki.js', icon: WikiJsIcon },
            { id: 52, label: 'Gitea', icon: GiteaIcon },
            { id: 40, label: 'Paperless-ngx', icon: PaperlessNgxIcon },
        ],
    },
    {
        icon: PortainerIcon,
        title: 'Orchestration & Automation Layer',
        description:
            'A unified control plane for container lifecycle management, infrastructure automation, scheduled task execution, and remote access — operated like a production ops environment.',
        technologies: ['Semaphore UI', 'Cronicle', 'Ansible', 'Guacamole'],
        status: 'Live',
        highlights: [
            'Container fleet management and deployment control via Portainer',
            'Ansible playbook execution and scheduling via Semaphore UI',
            'Distributed job scheduling and cron orchestration via Cronicle',
            'Browser-based remote access gateway (RDP/SSH) via Guacamole',
        ],
        tags: ['SRE', 'DevOps', 'Platform', 'Infra'],
        monitorBadges: [
            { id: 42, label: 'Cronicle', icon: CronicleIcon },
            { id: 39, label: 'Semaphore UI', icon: SemaphoreIcon },
            { id: 64, label: 'Guacamole', icon: GuacamoleIcon },
        ],
    },
];

const statusColor = (status: ProjectStatus) =>
    status === 'Live' ? 'success' : status === 'Rolling Out' ? 'info' : 'warning';

const parseMonitorStatus = (badgeSvg: string): MonitorRuntimeStatus => {
    const text = badgeSvg.toLowerCase();

    if (text.includes('down') || text.includes('offline') || text.includes('unreachable')) {
        return 'down';
    }

    if (text.includes('maintenance') || text.includes('paused') || text.includes('pause')) {
        return 'maintenance';
    }

    if (text.includes('up') || text.includes('online') || text.includes('operational')) {
        return 'up';
    }

    return 'unknown';
};

const statusDotColor = (status: MonitorRuntimeStatus): string => {
    if (status === 'up') return '#16a34a';
    if (status === 'down') return '#dc2626';
    if (status === 'maintenance') return '#2563eb';
    return '#64748b';
};

const statusDotLabel = (status: MonitorRuntimeStatus): string => {
    if (status === 'up') return 'Up';
    if (status === 'down') return 'Down';
    if (status === 'maintenance') return 'Maintenance';
    return 'Unknown';
};

const FILTERS = ['All', 'SRE', 'Infra', 'Security', 'Platform', 'DevOps', 'MERN', 'Frontend', 'Self-Hosting'] as const;

const gridContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const ShowcaseSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>('All');
    const [monitorStatuses, setMonitorStatuses] = useState<Record<number, MonitorRuntimeStatus>>({});

    useEffect(() => {
        let isMounted = true;

        const monitorIds = Array.from(
            new Set(projects.flatMap((project) => project.monitorBadges?.map((monitor) => monitor.id) ?? [])),
        );

        const loadStatuses = async () => {
            const entries = await Promise.all(
                monitorIds.map(async (id): Promise<[number, MonitorRuntimeStatus]> => {
                    try {
                        const response = await fetch(
                            `https://status.manuviswanadha.in/api/badge/${id}/status?style=flat-square&label=status`,
                            { cache: 'no-store' },
                        );

                        if (!response.ok) {
                            return [id, 'unknown'];
                        }

                        const badgeSvg = await response.text();
                        return [id, parseMonitorStatus(badgeSvg)];
                    } catch {
                        return [id, 'unknown'];
                    }
                }),
            );

            if (!isMounted) {
                return;
            }

            setMonitorStatuses(Object.fromEntries(entries));
        };

        void loadStatuses();
        const intervalId = window.setInterval(loadStatuses, 60000);

        return () => {
            isMounted = false;
            window.clearInterval(intervalId);
        };
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') return projects;
        return projects.filter((project) => project.tags.includes(activeFilter));
    }, [activeFilter]);

    return (
        <Box
            id="showcase"
            sx={{
                py: { xs: 6, md: 8 },
                background: (theme) =>
                    theme.palette.mode === 'dark'
                        ? `linear-gradient(180deg,
                            rgba(14,165,233,0.06) 0px,
                            ${theme.palette.alternateBackground.main}ee 80px,
                            ${theme.palette.alternateBackground.main}ee 100%)`
                        : theme.palette.alternateBackground.main,
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
                    Project Showcase
                </Typography>

                <Typography variant="h6" component="p" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                    Filter by focus area and see live uptime state for hosted services.
                </Typography>

                <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent="center"
                    sx={{ mb: 4 }}
                >
                    {FILTERS.map((filter) => (
                        <Chip
                            key={filter}
                            label={filter}
                            clickable
                            onClick={() => setActiveFilter(filter)}
                            color={activeFilter === filter ? 'secondary' : 'default'}
                            variant={activeFilter === filter ? 'filled' : 'outlined'}
                        />
                    ))}
                </Stack>

                <Grid
                    container
                    spacing={4}
                    component={motion.div}
                    variants={gridContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {filteredProjects.map((project, index) => {
                        const ProjectIcon = project.icon;
                        return (
                            <Grid key={index} size={{ xs: 12, md: 4 }} component={motion.div} variants={cardVariants}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: { xs: 2.5, md: 3 },
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: (theme) => theme.shadows[8],
                                        },
                                    }}
                                >
                                    {/* Header */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1 }}>
                                        <Box sx={{ width: 32, height: 32, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <ProjectIcon width={32} height={32} />
                                        </Box>
                                        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
                                            {project.title}
                                        </Typography>
                                    </Box>

                                    {/* Status badge */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                                        <Chip
                                            label={project.status}
                                            color={statusColor(project.status)}
                                            size="small"
                                            icon={
                                                project.status === 'In Development'
                                                    ? <CircularProgress size={12} color="inherit" sx={{ ml: '6px !important' }} />
                                                    : undefined
                                            }
                                        />
                                    </Box>

                                    {!!project.monitorBadges?.length && (
                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="caption" sx={{ fontWeight: 700, display: 'block', mb: 1 }}>
                                                Live Service Status
                                            </Typography>
                                            <Stack direction="column" spacing={0.75}>
                                                {project.monitorBadges.map((monitor) => {
                                                    const MonitorIcon = monitor.icon ?? ProjectIcon;
                                                    const monitorName = monitor.name ?? monitor.label;
                                                    const runtimeStatus = monitorStatuses[monitor.id] ?? 'unknown';
                                                    const dotColor = statusDotColor(runtimeStatus);

                                                    return (
                                                        <Stack key={monitor.id} direction="row" spacing={1} alignItems="center" sx={{ minWidth: 0 }}>
                                                            {/* <Stack direction="row" alignItems="center" spacing={0.75}>
                                                                
                                                                <Typography
                                                                    variant="caption"
                                                                    sx={{
                                                                        fontWeight: 700,
                                                                        color: dotColor,
                                                                        minWidth: 84,
                                                                    }}
                                                                >
                                                                    {statusDotLabel(runtimeStatus)}
                                                                </Typography>
                                                            </Stack> */}
                                                            <Box
                                                                aria-label={`${monitorName} is ${statusDotLabel(runtimeStatus)}`}
                                                                sx={{
                                                                    width: 10,
                                                                    height: 10,
                                                                    borderRadius: '50%',
                                                                    backgroundColor: dotColor,
                                                                    boxShadow: `0 0 0 0 ${dotColor}66`,
                                                                    animation: 'statusPulse 1.8s ease-out infinite',
                                                                    '@keyframes statusPulse': {
                                                                        '0%': { boxShadow: `0 0 0 0 ${dotColor}66` },
                                                                        '70%': { boxShadow: `0 0 0 10px transparent` },
                                                                        '100%': { boxShadow: `0 0 0 0 transparent` },
                                                                    },
                                                                }}
                                                            />
                                                            <Box
                                                                sx={{
                                                                    width: 18,
                                                                    height: 18,
                                                                    flexShrink: 0,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                }}
                                                            >
                                                                <MonitorIcon width={18} height={18} />
                                                            </Box>
                                                            <Typography
                                                                variant="caption"
                                                                sx={{
                                                                    minWidth: 140,
                                                                    flexShrink: 0,
                                                                    fontWeight: 600,
                                                                    color: 'text.secondary',
                                                                }}
                                                            >
                                                                {monitorName}
                                                            </Typography>

                                                        </Stack>
                                                    );
                                                })}
                                            </Stack>
                                        </Box>
                                    )}

                                    {/* Description */}
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7 }}>
                                        {project.description}
                                    </Typography>

                                    {/* Highlights */}
                                    <Box component="ul" sx={{ pl: 2, mb: 2, mt: 0, flexGrow: 1 }}>
                                        {project.highlights.map((h, i) => (
                                            <Typography
                                                key={i}
                                                component="li"
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mb: 0.75, lineHeight: 1.6 }}
                                            >
                                                {h}
                                            </Typography>
                                        ))}
                                    </Box>

                                    {/* Tech chips */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto' }}>
                                        {project.technologies.map((tech) => (
                                            <Chip key={tech} label={tech} size="small" variant="outlined" />
                                        ))}
                                    </Box>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default ShowcaseSection;