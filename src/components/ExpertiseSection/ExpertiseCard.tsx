// src/components/ExpertiseSection/ExpertiseCard.tsx
import React from 'react';
import {
    Box,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export interface ExpertiseDetail {
    subTitle?: string;
    details: string[];
}

export interface ExpertiseAreaProps {
    icon: React.ElementType;
    title: string;
    description: string;
    points: ExpertiseDetail[];
}

const ExpertiseCard: React.FC<ExpertiseAreaProps> = ({ icon: AreaIcon, title, description, points }) => {
    return (
        <Paper
            elevation={3} // Or adjust elevation as desired
            sx={{
                p: { xs: 2, sm: 3 },
                // height: '100%', // REMOVE THIS - no longer needed for vertical stack
                // display: 'flex', // Flex direction is still useful for internal layout
                // flexDirection: 'column',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AreaIcon color="primary" sx={{ fontSize: '2.5rem', mr: 1.5 }} />
                <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                    {title}
                </Typography>
            </Box>

            <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{
                    // flexGrow: 1, // REMOVE THIS - no longer needed in this context
                    mb: 2,
                }}
            >
                {description}
            </Typography>

            <Box> {/* Wrapper for points list */}
                <Divider sx={{ my: 1.5 }} />
                {points.map((point, pIndex) => (
                    <Box key={pIndex} sx={{ mt: 1 }}>
                        {point.subTitle && (
                            <Typography variant="h6" component="h4" sx={{ fontWeight: 500, fontSize: '1.05rem', mb: 0.5 }}>
                                {point.subTitle}
                            </Typography>
                        )}
                        <List dense disablePadding>
                            {point.details.map((detail, dIndex) => (
                                <ListItem key={dIndex} sx={{ py: 0.25, pl: point.subTitle ? 2 : 0 }}>
                                    <ListItemIcon sx={{ minWidth: '28px' }}>
                                        <CheckCircleOutlineIcon fontSize="small" color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary={detail} primaryTypographyProps={{ variant: 'body2' }} />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </Box>
        </Paper>
    );
};

export default ExpertiseCard;