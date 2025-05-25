// src/components/ExpertiseSection/ExpertiseSection.tsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BuildIcon from '@mui/icons-material/Build';
import DnsIcon from '@mui/icons-material/Dns';

import ExpertiseCard, { type ExpertiseAreaProps } from './ExpertiseCard';

const expertiseData: ExpertiseAreaProps[] = [
    {
        icon: CodeIcon,
        title: 'MERN Stack Development',
        description: 'My MERN stack development experience covers the full spectrum of application creation, from intricate frontend UIs to robust backend logic and data management:',
        points: [
            {
                subTitle: 'Dynamic & Interactive Frontend Development (React & Redux Toolkit):',
                details: [
                    'Expertise in building complex, state-driven user interfaces with React and Redux Toolkit.',
                    'Proven ability to develop features like custom, interactive timelines, real-time previews, and sophisticated data visualizations.',
                    'Proficient in integrating libraries like D3.js to render dynamic overlays (e.g., Picture-in-Picture, text, images) on media elements.',
                    'Experience building features from scratch, such as comprehensive media libraries for browsing and selecting assets.',
                    'Developed functionalities for direct media capture within the browser, including video, audio, and screen recording.',
                ],
            },
            {
                subTitle: 'Robust Backend Development (Node.js & Express.js):',
                details: [
                    'Skilled in creating secure and efficient RESTful APIs with Node.js and Express.js.',
                    'Designing clear API contracts and data structures (e.g., custom JSON formats for complex operations) that enable decoupled and extensible systems.',
                ],
            },
            {
                subTitle: 'Efficient Data Management (MongoDB):',
                details: ['Designing MongoDB schemas optimized for application performance and scalability.'],
            },
            {
                subTitle: 'Architectural Foresight:',
                details: ['A key focus in my development process is creating extensible architectures. For example, the design of core data structures allows for advanced capabilities such as programmatically generating entire complex sequences or workflows without manual UI interaction.'],
            },
        ],
    },
    {
        icon: BuildIcon,
        title: 'Problem Solving & Architectural Design',
        description: 'My expertise includes dissecting intricate UI/UX challenges and engineering elegant, functional solutions. For example:',
        points: [
            {
                subTitle: '1. Pixel-to-Time Translation for Dynamic Timelines:',
                details: [
                    'Achieved using Core React & Redux Toolkit for event handling and state management.',
                    'Developed custom mathematical logic and timer-based mechanisms for precise pixel-to-time mapping.',
                    'Ensured real-time responsiveness for a smooth user experience.',
                    'This foundational work significantly simplified subsequent feature implementation.',
                ],
            },
            {
                subTitle: '2. Decoupled Preview & Backend Processing for Complex Edits:',
                details: [
                    'Implemented client-side visual feedback for user actions purely through CSS manipulations on the frontend.',
                    'Designed a precise and extensible JSON instruction set as a contract between frontend and backend.',
                    'Enabled sequential backend processing based on this structured JSON.',
                    'This approach made the system highly extensible and maintainable.',
                ],
            },
        ],
    },
    {
        icon: DnsIcon,
        title: 'Deployment, CI/CD & Infrastructure Management',
        description: 'Beyond development, I bring practical experience in deploying and managing web applications, ensuring they run reliably and efficiently:',
        points: [
            {
                subTitle: 'Containerization with Docker:',
                details: [
                    'Proficient in writing Dockerfiles (including multi-stage builds for React & Node.js).',
                    'Experienced in managing containerized services (Portainer, Docker CLI) for numerous self-hosted applications.',
                ],
            },
            {
                subTitle: 'Linux Server Administration & Self-Hosting:',
                details: [
                    'Over a decade of experience as a Linux user, adept at server administration tasks.',
                    'Successfully manage a personal homelab (Raspberry Pi based) hosting diverse services, orchestrated via Nginx Proxy Manager.',
                    'This very landing page is containerized with Docker and self-hosted on this infrastructure.',
                ],
            },
            {
                subTitle: 'CI/CD Automation:',
                details: [
                    'Practical experience with GitHub Actions and Jenkins for personal projects.',
                    'Automated workflows for building Docker images and deploying applications.',
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
                backgroundColor: 'background.default', // Or 'background.paper' if you prefer white
            }}
        >
            <Container maxWidth="md"> {/* Using "md" for better readability in a single column */}
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    sx={{ mb: { xs: 4, md: 6 }, fontWeight: 'bold' }}
                >
                    My Expertise
                </Typography>

                {expertiseData.map((area, index) => (
                    <Box
                        key={area.title}
                        // Add bottom margin to all but the last card for spacing
                        // Or, if your ExpertiseCard's Paper has elevation, it might provide enough visual separation
                        sx={{ mb: index < expertiseData.length - 1 ? 4 : 0 }}
                    >
                        <ExpertiseCard
                            icon={area.icon}
                            title={area.title}
                            description={area.description}
                            points={area.points}
                        />
                        {/* Optional: You could add a <Divider /> component here if you want stronger visual separation between cards */}
                        {/* {index < expertiseData.length - 1 && <Divider sx={{ my: 4 }} />} */}
                    </Box>
                ))}
            </Container>
        </Box>
    );
};

export default ExpertiseSection;