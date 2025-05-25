// src/components/SectionMinimap.tsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Box, IconButton, Tooltip, useTheme, alpha } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // A filled circle icon

// This should match the sections you want in the minimap
// It's good to keep this consistent with your navItems in Navigation.tsx
interface SectionItem {
    id: string;    // The ID of the section element
    label: string; // Label for the Tooltip
}

const sectionsForMinimap: SectionItem[] = [
    { id: 'hero', label: 'Welcome' },
    { id: 'expertise', label: 'My Expertise' },
    { id: 'why-work-with-me', label: 'Why Me?' },
    { id: 'about-me', label: 'About Me' },
    { id: 'showcase', label: 'Showcase' },
    { id: 'contact', label: 'Contact' },
];

const SectionMinimap: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>(sectionsForMinimap[0]?.id || '');
    const theme = useTheme();

    // Using a ref to store observer instances to properly disconnect them on cleanup
    const observerRefs = useRef<Map<string, IntersectionObserver>>(new Map());
    // Ref to store the section elements themselves to avoid re-querying DOM
    const sectionElementsRef = useRef<Map<string, HTMLElement | null>>(new Map());

    // Memoize handleScrollTo to prevent re-creation on every render
    const handleScrollTo = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Or 'center' if you prefer
            });
        }
    }, []);

    useEffect(() => {
        // Populate sectionElementsRef on mount
        sectionsForMinimap.forEach(section => {
            sectionElementsRef.current.set(section.id, document.getElementById(section.id));
        });

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Option 1: Set active if any part is intersecting (can lead to multiple "active" visually)
                    // setActiveSection(entry.target.id);

                    // Option 2: Set active only if it's the most visible or meets a higher threshold
                    // This requires more complex logic to determine the "most" visible,
                    // For simplicity, we'll update if it's significantly in view.
                    // A common approach is to find the entry with the highest intersectionRatio.
                    // For this example, if it's more than 50% visible, consider it.
                    if (entry.intersectionRatio >= 0.5) { // Adjust threshold as needed
                        setActiveSection(entry.target.id);
                    }
                }
            });
        };

        // Get AppBar height for rootMargin offset
        const appBarHeight =
            (theme.mixins.toolbar.minHeight && typeof theme.mixins.toolbar.minHeight === 'number'
                ? theme.mixins.toolbar.minHeight
                : parseInt(String(theme.mixins.toolbar.minHeight) || "64", 10)); // Parse string like "64px" to number

        sectionsForMinimap.forEach(section => {
            const element = sectionElementsRef.current.get(section.id);
            if (element) {
                // Disconnect previous observer for this element if it exists
                if (observerRefs.current.has(section.id)) {
                    observerRefs.current.get(section.id)?.disconnect();
                }

                const observer = new IntersectionObserver(observerCallback, {
                    root: null, // Observes intersections relative to the viewport
                    rootMargin: `-${appBarHeight + 10}px 0px -40% 0px`, // Top offset for AppBar, bottom offset to trigger earlier
                    threshold: [0.1, 0.5, 0.9], // Trigger callback at these visibility ratios
                });
                observer.observe(element);
                observerRefs.current.set(section.id, observer);
            }
        });

        // Cleanup: Disconnect all observers when the component unmounts
        return () => {
            observerRefs.current.forEach(observer => observer.disconnect());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme.mixins.toolbar.minHeight]); // Re-run effect if toolbar height (from theme) changes

    return (
        <Box
            sx={{
                position: 'fixed',
                right: theme.spacing(2.5), // Adjust spacing from the edge
                top: '50%',
                transform: 'translateY(-50%)', // Vertically center the minimap
                // display: 'flex',
                flexDirection: 'column',
                gap: 1.5, // Spacing between minimap dots
                zIndex: theme.zIndex.fab, // Ensure it's above content but potentially below modals
                // Optional: Add a subtle background if needed for visibility
                // backgroundColor: alpha(theme.palette.background.paper, 0.8),
                // padding: theme.spacing(1),
                // borderRadius: theme.shape.borderRadius,
                // boxShadow: theme.shadows[3],
                // Hide on smaller screens if it becomes too intrusive
                display: { xs: 'none', md: 'flex' },
            }}
        >
            {sectionsForMinimap.map((section) => {
                const isActive = activeSection === section.id;
                return (
                    <Tooltip title={section.label} placement="left" key={section.id} arrow>
                        <IconButton
                            size="small"
                            href={`#${section.id}`}
                            onClick={() => handleScrollTo(section.id)}
                            sx={{
                                p: 0.5, // Padding around the icon to make the clickable area slightly larger
                                color: isActive ? 'secondary.main' : alpha(theme.palette.text.primary, 0.5),
                                transform: isActive ? 'scale(1.3)' : 'scale(1)',
                                transition: theme.transitions.create(['color', 'transform'], {
                                    duration: theme.transitions.duration.short,
                                }),
                                '&:hover': {
                                    color: isActive ? 'secondary.dark' : theme.palette.text.primary,
                                    transform: 'scale(1.3)', // Enlarge on hover too
                                },
                            }}
                        >
                            <FiberManualRecordIcon sx={{ fontSize: isActive ? '1rem' : '0.7rem' }} />
                        </IconButton>
                    </Tooltip>
                );
            })}
        </Box>
    );
};

export default SectionMinimap;