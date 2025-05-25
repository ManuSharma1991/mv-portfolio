import React from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton, // If you want to add social icon buttons
    Stack,      // For arranging social icons
} from '@mui/material';
// Example social icons - uncomment and import if you use them
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter'; // Or XIcon if MUI has it

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const yourGitHubUrl = "https://github.com/ManuSharma1991"; // Replace
    const yourLinkedInUrl = "https://www.linkedin.com/in/your-actual-linkedin-profile/"; // Replace
    // const yourTwitterUrl = "https://twitter.com/yourprofile"; // Replace

    return (
        <Box
            component="footer"
            sx={{
                py: { xs: 3, sm: 4 }, // Vertical padding
                px: { xs: 2, sm: 3 }, // Horizontal padding
                mt: 'auto', // Pushes footer to the bottom if content is short (needs flex layout on App's parent)
                backgroundColor: 'primary.dark', // Or another dark color from your theme
                color: 'grey.500', // Light grey text for contrast on dark background
                borderTop: (theme) => `1px solid ${theme.palette.divider}`, // Subtle top border
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" align="center" gutterBottom>
                    © {currentYear} Manu Viswanadha. All rights reserved.
                </Typography>
                <Typography variant="caption" display="block" align="center" sx={{ fontStyle: 'italic', mb: 2 }}>
                    This website is proudly self-hosted on a Raspberry Pi using Docker.
                </Typography>

                {/* Optional: Social Media Links */}
                <Stack
                    direction="row"
                    justifyContent="center"
                    spacing={1} // Spacing between icons
                >
                    {yourGitHubUrl && (
                        <IconButton
                            aria-label="GitHub"
                            href={yourGitHubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'grey.400', '&:hover': { color: 'common.white' } }}
                        >
                            {/* <GitHubIcon /> */}
                            <Typography variant="caption" sx={{ border: '1px solid grey.400', borderRadius: '4px', padding: '2px 4px' }}>GitHub</Typography> {/* Placeholder if icon not used */}
                        </IconButton>
                    )}
                    {yourLinkedInUrl && (
                        <IconButton
                            aria-label="LinkedIn"
                            href={yourLinkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: 'grey.400', '&:hover': { color: 'common.white' } }}
                        >
                            {/* <LinkedInIcon /> */}
                            <Typography variant="caption" sx={{ border: '1px solid grey.400', borderRadius: '4px', padding: '2px 4px' }}>LinkedIn</Typography> {/* Placeholder */}
                        </IconButton>
                    )}
                    {/* {yourTwitterUrl && (
            <IconButton
              aria-label="Twitter"
              href={yourTwitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'grey.400', '&:hover': { color: 'common.white' } }}
            >
              <TwitterIcon />
            </IconButton>
          )} */}
                </Stack>

                {/* You could also add a simple text link back to your GitHub repo for the portfolio itself */}
                {/* <Typography variant="caption" display="block" align="center" sx={{ mt: 1 }}>
          <MuiLink href="https://github.com/ManuSharma1991/mv-portfolio" target="_blank" rel="noopener noreferrer" color="inherit">
            View Source on GitHub
          </MuiLink>
        </Typography> */}

            </Container>
        </Box>
    );
};

export default Footer;