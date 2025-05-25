// src/components/ScrollToTopButton.tsx
import React from 'react'; // No need for useState/useEffect if using useScrollTrigger
import { Box, Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton: React.FC = () => {
    // useScrollTrigger hook from MUI to determine when to show the button
    // It listens to window scroll events internally.
    const trigger = useScrollTrigger({
        // target: window ? window() : undefined, // Default is window, so not strictly necessary
        disableHysteresis: true, // Show button immediately on scroll, don't wait for scroll direction change
        threshold: 200, // Show the button when the user has scrolled down 200px
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // The 'event.currentTarget' might be useful if you need to blur or something,
        // but for scrolling, 'window' is the target.
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Zoom in={trigger}>
            {/* The Box wrapper for Fab is recommended by MUI for proper positioning with Zoom */}
            <Box
                onClick={handleClick}
                role="presentation" // Indicates it's a presentational element that handles clicks
                sx={{
                    position: 'fixed',
                    bottom: (theme) => theme.spacing(3), // 24px from bottom (theme.spacing(2) is 16px)
                    right: (theme) => theme.spacing(3),  // 24px from right
                    zIndex: (theme) => theme.zIndex.tooltip, // Ensure it's above most content but below modals/drawers
                }}
            >
                <Fab color="secondary" size="medium" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>
        </Zoom>
    );
};

export default ScrollToTopButton;