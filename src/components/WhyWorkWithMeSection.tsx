import React from 'react';
import {
    Box,
    Container,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, // Optional: wrap the list in a Paper for a card-like feel
} from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined';


interface Reason {
    icon: React.ElementType;
    text: string;
}

const reasonsToWorkWithMe: Reason[] = [
    {
        icon: LightbulbOutlinedIcon,
        text: 'Rapid Problem Understanding & Versatile Solutions: I excel at quickly grasping project requirements and presenting 2-3 clear, well-reasoned alternative solutions.',
    },
    {
        icon: RuleOutlinedIcon,
        text: 'Proven Problem-Solving & Architectural Skills: My experience involves tackling complex technical challenges and architecting robust, maintainable solutions.',
    },
    {
        icon: CodeOutlinedIcon,
        text: 'Full-Spectrum Technical Capability: Expertise spanning full-stack MERN development and practical DevOps skills (Docker, Linux, self-hosting).',
    },
    {
        icon: SchoolOutlinedIcon,
        text: 'Commitment to Continuous Learning & Modern Practices: Dedicated self-learning and practical application ensure I leverage current and effective technologies.',
    },
    {
        icon: ForumOutlinedIcon,
        text: 'Clear Communication & Collaboration: I believe in transparent and timely communication throughout the project lifecycle.',
    },
    {
        icon: SpeedOutlinedIcon,
        text: 'Pragmatic & Efficient Delivery: I focus on delivering functional and impactful solutions efficiently.',
    },
];

const WhyWorkWithMeSection: React.FC = () => {
    return (
        <Box
            id="why-work-with-me" // ID for navigation
            sx={{
                py: { xs: 6, md: 8 },
                backgroundColor: 'alternateBackground.main', // Define this in your theme, e.g., a slightly different grey or a very light primary
                // Or use: theme => theme.palette.grey[100] or theme.palette.background.paper
            }}
        >
            <Container maxWidth="md"> {/* "md" for good readability of list items */}
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    sx={{ mb: 2, fontWeight: 'bold' }}
                >
                    Why Work With Me?
                </Typography>
                <Typography
                    variant="h6"
                    component="p"
                    color="text.secondary"
                    textAlign="center"
                    paragraph
                    sx={{ mb: { xs: 4, md: 6 } }}
                >
                    Choosing the right developer is key to your project's success. Here’s what I bring to the table:
                </Typography>

                {/* Optional: Wrap List in Paper for a slightly different visual treatment */}
                {/* <Paper elevation={2} sx={{ p: { xs: 2, sm: 3 } }}> */}
                <List disablePadding>
                    {reasonsToWorkWithMe.map((reason, index) => {
                        const ReasonIcon = reason.icon;
                        return (
                            <ListItem
                                key={index}
                                sx={{
                                    alignItems: 'flex-start', // Aligns icon with the top of the text
                                    mb: 2.5, // Spacing between list items
                                    // If not using Paper, you could add a light background/border here for each item
                                    // backgroundColor: 'background.paper', 
                                    // borderRadius: 1, 
                                    // p: 2
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: '40px', mt: '5px', color: 'secondary.main' /* Icon color */ }}>
                                    <ReasonIcon fontSize="medium" />
                                </ListItemIcon>
                                <ListItemText
                                    primary={reason.text}
                                    primaryTypographyProps={{ variant: 'body1', lineHeight: 1.7 }}
                                />
                            </ListItem>
                        );
                    })}
                </List>
                {/* </Paper> */}
            </Container>
        </Box>
    );
};

export default WhyWorkWithMeSection;