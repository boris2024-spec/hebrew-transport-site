import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
} from '@mui/material';
import { DirectionsBus, Phone, Email } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const TestPage: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <DirectionsBus sx={{ fontSize: '4rem', color: 'primary.main', mb: 2 }} />
                <Typography variant="h1" component="h1" gutterBottom>
                    מסיעי דימונה
                </Typography>
                <Typography variant="h4" color="text.secondary" paragraph>
                    שירותי תחבורה מקצועיים ואמינים
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4, flexWrap: 'wrap' }}>
                <Button
                    component="a"
                    href="tel:08-6555678"
                    sx={{
                        minWidth: 200,
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'primary.main',
                        '&:hover': {
                            backgroundColor: '#d4ff000c',
                            transform: 'translateY(-2px)',
                            boxShadow: 2
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Phone color="primary" sx={{ fontSize: '2rem', mb: 1 }} />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            התקשר עכשיו
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            08-6555678
                        </Typography>
                    </Box>
                </Button>

                <Button
                    component="a"
                    href="mailto:mdimona2018@gmail.com"
                    sx={{
                        minWidth: 200,
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid',
                        borderColor: 'primary.main',
                        '&:hover': {
                            backgroundColor: '#d4ff000c',
                            transform: 'translateY(-2px)',
                            boxShadow: 2
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Email color="primary" sx={{ fontSize: '2rem', mb: 1 }} />
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            שלח אימייל
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            mdimona2018@gmail.com
                        </Typography>
                    </Box>
                </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/about"
                    sx={{
                        minWidth: 150,
                        '&:hover': {
                            backgroundColor: '#FFD700',
                            transform: 'translateY(-2px)',
                            boxShadow: 2
                        },
                        transition: 'all 0.3s ease'
                    }}
                >
                    אודות
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    component={Link}
                    to="/services"
                    sx={{ minWidth: 150 }}
                >
                    השירותים שלנו
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/booking"
                    color="secondary"
                    sx={{ minWidth: 150 }}
                >
                    צור קשר
                </Button>
            </Box>

            <Box sx={{ mt: 6, p: 3, backgroundColor: 'primary.light', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    זמינים 24/7 לשירותכם
                </Typography>
                <Typography variant="body1">
                    שירותי תחבורה איכותיים בדימונה ובאזור הדרום
                </Typography>
            </Box>
        </Container>
    );
};

export default TestPage;
