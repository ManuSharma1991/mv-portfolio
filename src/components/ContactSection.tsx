import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid, // For form layout
    Paper, // Optional: To wrap the contact info or form
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub'; // Optional

const ContactSection: React.FC = () => {
    const yourEmail = "manu.viswanad@gmail.com"; // <-- REPLACE THIS
    // const yourLinkedInUrl = "https://www.linkedin.com/in/your-actual-linkedin-profile/"; // <-- REPLACE THIS
    const yourGitHubUrl = "https://github.com/ManuSharma1991"; // <-- REPLACE THIS (or remove if not desired here)

    return (
        <Box
            id="contact" // ID for navigation
            sx={{
                py: { xs: 6, md: 8 },
                backgroundColor: 'background.paper', // Or a distinct background color
            }}
        >
            <Container maxWidth="md"> {/* "md" is good for contact info/forms */}
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    sx={{ mb: { xs: 4, md: 6 }, fontWeight: 'bold' }}
                >
                    Get In Touch
                </Typography>

                <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, textAlign: 'center', backgroundColor: 'transparent' /* If section bg is distinct */ }}>
                    <Typography variant="h6" component="p" color="text.secondary" paragraph sx={{ mb: 4 }}>
                        Interested in collaborating, have a project in mind, or just want to connect?
                        I'd love to hear from you!
                    </Typography>

                    <Grid container spacing={3} justifyContent="center">
                        <Grid size={{ xs: 12, sm: "auto" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<EmailIcon />}
                                href={`mailto:${yourEmail}`}
                                size="large"
                                sx={{ width: { xs: '100%', sm: 'auto' } }}
                            >
                                Email Me
                            </Button>
                        </Grid>
                        {/* <Grid size={{ xs: 12, sm: "auto" }}>
                            <Button
                                variant="outlined"
                                color="primary"
                                startIcon={<LinkedInIcon />}
                                href={yourLinkedInUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="large"
                                sx={{ width: { xs: '100%', sm: 'auto' } }}
                            >
                                LinkedIn Profile
                            </Button>
                        </Grid> */}
                        {yourGitHubUrl && (
                            <Grid size={{ xs: 12, sm: "auto" }}>
                                <Button
                                    variant="outlined"
                                    color="primary" // Or use a different color like 'inherit' if 'primary' is too much
                                    startIcon={<GitHubIcon />}
                                    href={yourGitHubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="large"
                                    sx={{ width: { xs: '100%', sm: 'auto' } }}
                                >
                                    GitHub Profile
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </Paper>

                {/* Placeholder for a future contact form */}
                {/*
        <Divider sx={{ my: { xs: 4, md: 6 } }}>
          <Typography variant="overline">Or Send a Direct Message</Typography>
        </Divider>

        <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, mt: 2 }}>
          <Box
            component="form"
            // onSubmit={handleSubmit} // You'll define this later
            noValidate 
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="name"
                  name="name"
                  label="Your Name"
                  variant="outlined"
                  // value={formData.name}
                  // onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  id="email"
                  name="email"
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  // value={formData.email}
                  // onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="message"
                  name="message"
                  label="Your Message"
                  multiline
                  rows={5}
                  variant="outlined"
                  // value={formData.message}
                  // onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  sx={{ mt: 2, py: 1.5, px: 5 }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        */}
            </Container>
        </Box>
    );
};

export default ContactSection;