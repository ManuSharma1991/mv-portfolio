import React, { useMemo, useState } from 'react';
import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import RouterIcon from '@mui/icons-material/Router';
import StorageIcon from '@mui/icons-material/Storage';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import BackupIcon from '@mui/icons-material/Backup';

type Tier = 'compute' | 'network' | 'storage' | 'apps' | 'backup';

interface HomelabNode {
    id: string;
    title: string;
    tier: Tier;
    role: string;
    highlights: string[];
}

const tierMeta: Record<Tier, { label: string; icon: React.ElementType }> = {
    compute: { label: 'Compute & Virtualization', icon: MemoryIcon },
    network: { label: 'Network & Routing', icon: RouterIcon },
    storage: { label: 'Storage & Data Protection', icon: StorageIcon },
    apps: { label: 'Application & Access Layer', icon: CloudQueueIcon },
    backup: { label: 'Backup & Recovery', icon: BackupIcon },
};

const nodes: HomelabNode[] = [
    {
        id: 'tesseract',
        title: 'Tesseract (Proxmox VE 9)',
        tier: 'compute',
        role: 'Primary virtualization host running 10 LXC containers',
        highlights: [
            'Ryzen 5 5600X, 32GB RAM, AMD RX 6600 XT',
            'GPU render node shared to Jellyfin + Immich containers',
            'LXC startup orchestration and role-based segmentation',
        ],
    },
    {
        id: 'bifrost',
        title: 'Bifrost (OpenWrt VM)',
        tier: 'network',
        role: 'Inter-VLAN routing and gateway control plane',
        highlights: [
            'VLANs: Gatekeepers, Media, DevOps, Downloads, Sandbox',
            'Trunked through vmbr0',
            'Traffic policy isolation by workload type',
        ],
    },
    {
        id: 'vault',
        title: 'ZFS + mergerfs + SnapRAID',
        tier: 'storage',
        role: 'Unified data layer with performance + parity protection',
        highlights: [
            'Pools: iceman, phoenix, tank, scratch',
            'Union mount /mnt/eternity consumed by services',
            'Parity and backup workflows for media + docs',
        ],
    },
    {
        id: 'ultron',
        title: 'Ultron (Gateway/Auth/Ops)',
        tier: 'apps',
        role: 'Reverse proxy, SSO, security and observability hub',
        highlights: [
            'Nginx Proxy Manager + Authentik + CrowdSec',
            'Portainer + Dozzle + Beszel observability',
            'Public entrypoint for all critical services',
        ],
    },
    {
        id: 'agamotto',
        title: 'Agamotto (PBS on Raspberry Pi 5)',
        tier: 'backup',
        role: 'Dedicated backup infrastructure for business continuity',
        highlights: [
            'Proxmox Backup Server 4.1.6',
            '1TB NVMe datastore (Vault)',
            'Independent backup target from main host',
        ],
    },
];

const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

const HomelabArchitectureSection: React.FC = () => {
    const [selectedNodeId, setSelectedNodeId] = useState<string>('tesseract');

    const selectedNode = useMemo(
        () => nodes.find((node) => node.id === selectedNodeId) ?? nodes[0],
        [selectedNodeId]
    );

    return (
        <Box id="homelab-architecture" sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    sx={{ mb: 2, fontWeight: 'bold' }}
                >
                    Interactive Homelab Architecture
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ mb: 5 }}
                >
                    A layered view of my platform, designed for isolation, observability, and recovery.
                </Typography>

                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <Paper sx={{ p: { xs: 2, md: 3 }, height: '100%' }}>
                            <Stack spacing={2}>
                                {nodes.map((node) => {
                                    const Icon = tierMeta[node.tier].icon;
                                    const isSelected = node.id === selectedNodeId;

                                    return (
                                        <Button
                                            key={node.id}
                                            variant={isSelected ? 'contained' : 'outlined'}
                                            color={isSelected ? 'secondary' : 'primary'}
                                            onClick={() => setSelectedNodeId(node.id)}
                                            startIcon={<Icon />}
                                            sx={{
                                                justifyContent: 'flex-start',
                                                py: 1.5,
                                                px: 2,
                                                textAlign: 'left',
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                                    {node.title}
                                                </Typography>
                                                <Typography variant="caption" sx={{ opacity: 0.9 }}>
                                                    {tierMeta[node.tier].label}
                                                </Typography>
                                            </Box>
                                        </Button>
                                    );
                                })}
                            </Stack>
                        </Paper>
                    </Grid>

                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper sx={{ p: { xs: 2, md: 3 }, height: '100%' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                                {selectedNode.title}
                            </Typography>
                            <Chip
                                label={tierMeta[selectedNode.tier].label}
                                color="secondary"
                                size="small"
                                sx={{ mb: 2 }}
                            />
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                                {selectedNode.role}
                            </Typography>
                            <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                {selectedNode.highlights.map((item) => (
                                    <Typography key={item} component="li" variant="body2" sx={{ mb: 0.8 }}>
                                        {item}
                                    </Typography>
                                ))}
                            </Box>

                            <Box
                                sx={{
                                    mt: 2.5,
                                    pt: 2,
                                    borderTop: '1px solid',
                                    borderColor: 'divider',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 0.5,
                                }}
                            >
                                <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                    Platform Standards
                                </Typography>
                                <Typography variant="caption" color="text.secondary">• Recovery: Full restore from Proxmox Backup Server (PBS)</Typography>
                                <Typography variant="caption" color="text.secondary">• Isolation: Role-based LXC segmentation per workload</Typography>
                                <Typography variant="caption" color="text.secondary">• Monitoring: Centralised health, logs, and alerting</Typography>
                            </Box>

                            <Button variant="outlined" sx={{ mt: 3 }} onClick={scrollToContact}>
                                Build Something Similar
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HomelabArchitectureSection;
