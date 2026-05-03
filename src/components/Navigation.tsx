// src/components/Navigation.tsx
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Avatar, // Import Avatar if you want to use it for a small pic
    Tooltip,
} from '@mui/material';
import type { PaletteMode } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// Optional: Import your small logo/image if you have one
// import smallLogo from '../assets/logo-sm.png'; // Adjust path and filename
// src/components/Navigation.tsx
import ManuLogo from '../assets/manu.svg?react'; // Keep this if the above doesn't work

interface NavItem {
    label: string;
    id: string;
}

const navItems: NavItem[] = [
    { label: 'Showcase', id: 'showcase' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Why Me?', id: 'why-work-with-me' },
    { label: 'About', id: 'about-me' },
    { label: 'Homelab', id: 'homelab-architecture' },
    { label: 'Contact', id: 'contact' },
];

const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const navHeight = document.getElementById('site-navbar')?.getBoundingClientRect().height ?? 76;
        const targetTop = element.getBoundingClientRect().top + window.scrollY - navHeight - 12;
        window.scrollTo({ top: Math.max(targetTop, 0), behavior: 'smooth' });
    }
};

interface NavigationProps {
    colorMode: PaletteMode;
    onToggleColorMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ colorMode, onToggleColorMode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }} role="presentation">
            <Typography variant="h6" sx={{ my: 2 }}>
                Manu Viswanadha
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            sx={{ textAlign: 'center' }}
                            onClick={() => handleScrollTo(item.id)}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} onClick={onToggleColorMode}>
                        <ListItemText primary={colorMode === 'light' ? 'Dark Mode' : 'Light Mode'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar id="site-navbar" component="nav" position="sticky" sx={{ backgroundColor: 'primary.dark' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        {/* Logo / Name Section */}
                        <Box
                            component="a" // Make the whole logo area clickable
                            onClick={() => handleScrollTo('hero')}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                cursor: 'pointer',
                                flexGrow: { xs: 1, sm: 0 }, // Occupy space on xs, shrink on sm+
                                mr: 2, // Margin to separate from nav items on desktop
                            }}
                        >
                            {/* Optional: Small Logo/Avatar Image */}

                            <Avatar
                                alt="MV" // Or your initials
                                sx={{
                                    width: 40,
                                    height: 40,
                                    mr: 1,
                                    backgroundColor: 'secondary.main' // If using initials, set a bg color
                                }}
                            >
                                <ManuLogo style={{ width: 40, height: 40 }} />
                            </Avatar>


                            {/* If you don't want an image, you can just use a simple icon or initials in an Avatar */}
                            {/* Example with initials in Avatar: */}
                            {/*
              <Avatar sx={{ width: 30, height: 30, mr: 1, bgcolor: 'secondary.main', fontSize: '0.9rem' }}>
                MV
              </Avatar>
              */}

                            <Typography
                                variant="h6"
                                noWrap // Prevents wrapping if name is long and space is tight
                                component="div" // It's part of the link (Box above)
                                sx={{
                                    // flexGrow: 1, // Removed to allow image and text to sit side-by-side nicely
                                    fontFamily: 'inherit', // Or your brand font
                                    fontWeight: 700,
                                    letterSpacing: '.05rem', // Adjusted for readability
                                    // color: 'inherit', // Inherited from Box
                                    // textDecoration: 'none', // Inherited from Box
                                    display: { xs: 'none', sm: 'block' } // Hide text on very small screens if too cramped with image
                                }}
                            >
                                Manu Viswanadha
                            </Typography>
                            {/* Show a shorter version or just logo on very small screens if name is too long */}
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{
                                    display: { xs: 'block', sm: 'none' }, // Only on extra-small
                                    fontFamily: 'inherit',
                                    fontWeight: 700,
                                }}
                            >
                                Manu Viswanadha {/* Or just show the logo/avatar if text is hidden */}
                            </Typography>
                        </Box>

                        {/* Desktop Navigation Links */}
                        <Box sx={{ display: { xs: 'none', sm: 'block' }, ml: 'auto' }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.id}
                                    onClick={() => handleScrollTo(item.id)}
                                    sx={{ color: 'common.white', mx: 1 }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Tooltip title={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
                                <IconButton color="inherit" onClick={onToggleColorMode} sx={{ ml: 1 }}>
                                    {colorMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                                </IconButton>
                            </Tooltip>
                        </Box>

                        {/* Mobile Menu Icon */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' }, ml: 'auto' /* Ensure it's pushed right if name isn't full width */ }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navigation;