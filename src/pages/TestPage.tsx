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
                <Card sx={{ minWidth: 200 }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Phone color="primary" sx={{ fontSize: '2rem', mb: 1 }} />
                        <Typography variant="h6">התקשר עכשיו</Typography>
                        <Typography variant="body2" color="text.secondary">
                            08-6566234
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ minWidth: 200 }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <Email color="primary" sx={{ fontSize: '2rem', mb: 1 }} />
                        <Typography variant="h6">שלח אימייל</Typography>
                        <Typography variant="body2" color="text.secondary">
                            info@dimona-transport.co.il
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/about"
                    sx={{ minWidth: 150 }}
                >
                    אודותינו
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
                    to="/contact"
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
