import React from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    CircularProgress, // To visually indicate "loading" or "in progress"
} from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction'; // Example icon

const ShowcaseSection: React.FC = () => {
    // This data will be replaced once your project is ready
    const upcomingProject = {
        title: 'Self-Hosted Link-in-Bio Service with Analytics',
        description:
            'A MERN-stack application allowing users to create and self-host their own "link-in-bio" pages, complete with basic click analytics. This project will demonstrate full-stack development, Docker containerization, and self-hosting deployment.',
        technologies: 'React, Node.js, Express, MongoDB, Docker, Material-UI',
        status: 'In Development',
    };

    return (
        <Box
            id="showcase" // ID for navigation
            sx={{
                py: { xs: 6, md: 8 },
                backgroundColor: 'alternateBackground.main', // Or your theme.palette.grey[100] or similar
            }}
        >
            <Container maxWidth="lg"> {/* Using lg for consistency if other sections are wide */}
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    sx={{ mb: { xs: 4, md: 6 }, fontWeight: 'bold' }}
                >
                    Skill Showcase / My Projects
                </Typography>

                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 2, sm: 3, md: 4 },
                        textAlign: 'center',
                        // backgroundColor: (theme) => alpha(theme.palette.primary.light, 0.05), // Optional very light bg tint
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                        <ConstructionIcon color="secondary" sx={{ fontSize: '2.5rem', mr: 1 }} />
                        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600, mb: 0 }}>
                            Upcoming Project
                        </Typography>
                    </Box>

                    <Typography variant="h6" component="h4" sx={{ fontWeight: 500, mt: 2 }}>
                        {upcomingProject.title}
                    </Typography>

                    <Typography variant="body1" color="text.secondary" sx={{ my: 2, maxWidth: '700px', mx: 'auto' }}>
                        {upcomingProject.description}
                    </Typography>

                    <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
                        <strong>Technologies:</strong> {upcomingProject.technologies}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, mb: 3 }}>
                        <Typography variant="subtitle1" color="secondary.main" sx={{ fontWeight: 'bold', mr: 1 }}>
                            Status:
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {upcomingProject.status}
                        </Typography>
                        <CircularProgress size={20} color="secondary" sx={{ ml: 1.5 }} />
                    </Box>

                    <Typography variant="caption" display="block" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                        A live demo, GitHub repository, and deployment tutorial will be available here upon completion. Stay tuned!
                    </Typography>

                    {/* Optional Button: Could link to a blog post discussing the project, or just be removed */}
                    {/* 
          <Button 
            variant="outlined" 
            color="primary" 
            sx={{ mt: 3 }}
            // onClick={() => alert('More details coming soon!')}
          >
            Learn More (Coming Soon)
          </Button> 
          */}
                </Paper>

                {/* 
          When you have more projects, you might map over an array:
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {projects.map(project => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                // Your ProjectCard component here
              </Grid>
            ))}
          </Grid>
        */}
            </Container>
        </Box>
    );
};

export default ShowcaseSection;