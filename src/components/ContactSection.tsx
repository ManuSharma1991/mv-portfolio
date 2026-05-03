import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper,
    Divider,
    TextField,
    Alert,
    Snackbar,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
    const yourEmail = 'manu.viswanad@gmail.com';
    const yourGitHubUrl = 'https://github.com/ManuSharma1991';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(yourEmail);
            setCopied(true);
        } catch {
            setSnackbarMessage('Unable to copy email automatically.');
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setSnackbarMessage('Please fill all fields before sending.');
            return;
        }

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setSnackbarMessage('Email service is not configured yet. Add EmailJS env variables.');
            return;
        }

        setIsSubmitting(true);
        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                { publicKey }
            );

            setFormData({ name: '', email: '', message: '' });
            setSnackbarMessage('Message sent successfully. I will get back to you soon.');
        } catch {
            setSnackbarMessage('Something went wrong while sending. Please use the email button.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Box
            id="contact"
            sx={{
                py: { xs: 6, md: 8 },
                background: (theme) =>
                    theme.palette.mode === 'dark'
                        ? `linear-gradient(180deg,
                            rgba(14,165,233,0.045) 0px,
                            ${theme.palette.background.paper}f2 80px,
                            ${theme.palette.background.paper}f2 100%)`
                        : theme.palette.background.paper,
            }}
        >
            <Container maxWidth="md"> {/* "md" is good for contact info/forms */}
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    textAlign="center"
                    sx={{
                        mb: { xs: 3, md: 5 },
                        fontWeight: 'bold',
                        '&::after': {
                            content: '""',
                            display: 'block',
                            width: 56,
                            height: 3,
                            borderRadius: 2,
                            backgroundColor: 'secondary.main',
                            mx: 'auto',
                            mt: 1.5,
                        },
                    }}
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
                        <Grid size={{ xs: 12, sm: "auto" }}>
                            <Button
                                variant="text"
                                color="secondary"
                                startIcon={<ContentCopyIcon />}
                                onClick={handleCopyEmail}
                                size="large"
                                sx={{ width: { xs: '100%', sm: 'auto' } }}
                            >
                                Copy Email
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

                    {copied && (
                        <Alert severity="success" sx={{ mt: 3 }} onClose={() => setCopied(false)}>
                            Email copied to clipboard.
                        </Alert>
                    )}
                </Paper>

                <Divider sx={{ my: { xs: 4, md: 6 } }}>
                    <Typography variant="overline">Or Send a Direct Message</Typography>
                </Divider>

                <Paper elevation={3} sx={{ p: { xs: 2, sm: 3, md: 4 }, mt: 2 }}>
                    <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
                        <Grid container spacing={2}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    required
                                    id="name"
                                    name="name"
                                    label="Your Name"
                                    variant="outlined"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField
                                    fullWidth
                                    required
                                    id="email"
                                    name="email"
                                    label="Your Email"
                                    type="email"
                                    variant="outlined"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    required
                                    id="message"
                                    name="message"
                                    label="Your Message"
                                    multiline
                                    rows={5}
                                    variant="outlined"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    disabled={isSubmitting}
                                    sx={{ mt: 2, py: 1.5, px: 5 }}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>

                <Snackbar
                    open={!!snackbarMessage}
                    autoHideDuration={4000}
                    onClose={() => setSnackbarMessage(null)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert severity="info" onClose={() => setSnackbarMessage(null)}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Container>
        </Box>
    );
};

export default ContactSection;