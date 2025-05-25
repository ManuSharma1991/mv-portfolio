// src/components/ScrollProgressBar.tsx
import React, { useState, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';

const ScrollProgressBar: React.FC = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const theme = useTheme(); // Access the theme for zIndex and potentially AppBar height

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        // document.documentElement.scrollHeight: Total height of the entire document
        // document.documentElement.clientHeight: Height of the visible part of the document (viewport height)
        // Total scrollable distance:
        const scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        if (scrollableHeight > 0) {
            const currentProgress = (scrollTop / scrollableHeight) * 100;
            setScrollProgress(currentProgress);
        } else {
            // If page is not scrollable (e.g., content fits entirely in viewport),
            // decide what to show. 0% or 100% are common.
            // Or if scrollTop is 0 and scrollableHeight is 0, it means it's at the top of a non-scrollable page.
            setScrollProgress(scrollTop === 0 && scrollableHeight === 0 ? 0 : 100);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Call handleScroll once on mount to set initial progress if already scrolled (e.g., on page refresh)
        handleScroll();

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    // Determine the top position based on AppBar height
    // theme.mixins.toolbar usually contains default AppBar height values
    // You might need to adjust this if your AppBar has a custom or dynamic height
    const appBarDefaultHeight =
        (theme.mixins.toolbar.minHeight && typeof theme.mixins.toolbar.minHeight === 'number'
            ? `${theme.mixins.toolbar.minHeight}px`
            : theme.mixins.toolbar.minHeight) || '64px'; // Fallback to common default

    return (
        <Box
            sx={{
                position: 'fixed', // Sticks to the viewport
                top: appBarDefaultHeight, // Position it right below the AppBar
                left: 0,
                width: '100%',
                height: '16px', // Thickness of the progress bar
                zIndex: theme.zIndex.appBar - 1, // Ensure it's behind the AppBar but above most content
                // backgroundColor: 'transparent', // The container itself is transparent
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    width: `${scrollProgress}%`, // Dynamic width based on scroll progress
                    backgroundColor: 'secondary.main', // Use your theme's secondary color (or any other)
                    transition: scrollProgress === 0 || scrollProgress === 100 ? 'none' : 'width 0.05s linear', // Smooth transition for width changes, but instant at 0/100 to avoid flicker
                }}
            />
        </Box>
    );
};

export default ScrollProgressBar;