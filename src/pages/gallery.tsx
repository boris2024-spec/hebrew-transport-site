import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Paper,
    Chip,
} from '@mui/material';
import {
    PhotoLibrary as GalleryIcon,
    DirectionsBus as BusIcon,
} from '@mui/icons-material';

const galleryImages = [
    {
        id: 1,
        src: '/images/bus2.png',
        title: 'אוטובוס תחבורה ציבורית',
        description: 'שירות הסעות מקצועי ואמין',
        category: 'תחבורה'
    },
    {
        id: 2,
        src: '/images/logo-01.png',
        title: 'לוגו מסיעי דימונה',
        description: 'הלוגו הרשמי של החברה',
        category: 'לוגו'
    },
    {
        id: 3,
        src: '/images/bus-icon.svg',
        title: 'אייקון אוטובוס',
        description: 'סמל האוטובוס המייצג את השירות',
        category: 'אייקונים'
    },
    {
        id: 4,
        src: '/images/256px-Icon-mode-bus-default.svg.png',
        title: 'סמל תחבורה',
        description: 'אייקון מצב תחבורה ציבורית',
        category: 'אייקונים'
    },
    {
        id: 5,
        src: '/images/bus1.png',
        title: 'רכב הסעות מודרני',
        description: 'רכב נוח ובטוח לשירותי הסעות איכותיים',
        category: 'רכבים'
    },
    {
        id: 6,
        src: '/images/bus8.png',
        title: 'מיניבוס תחבורה',
        description: 'פתרון תחבורה אידיאלי לקבוצות קטנות',
        category: 'רכבים'
    },
    {
        id: 7,
        src: '/images/bus5.png',
        title: 'אוטובוס מפואר',
        description: 'שירות הסעות איכותי עם נוחות מקסימלית',
        category: 'רכבים'
    },
    {
        id: 8,
        src: '/images/bus6.png',
        title: 'ציי רכבים מקצועי',
        description: 'מגוון רחב של רכבים לכל צורך תחבורתי',
        category: 'ציוד'
    },
    {
        id: 9,
        src: '/images/bus4.png',
        title: 'שירות הסעות אמין',
        description: 'מחויבות למצוינות ולשירות ללא פשרות',
        category: 'שירותים'
    },
];

const GalleryPage: React.FC = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* Header Section */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <GalleryIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            color: 'black',
                        }}
                    >
                        גלריית תמונות
                    </Typography>
                </Box>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: 'auto' }}
                >
                    צפו בתמונות של השירותים שלנו ושל הציוד המקצועי
                </Typography>
            </Box>

            {/* Stats Section */}
            <Paper
                elevation={3}
                sx={{
                    p: 3,
                    mb: 4,

                    borderRadius: 3,
                }}
            >
                <Grid container spacing={3} sx={{ textAlign: 'center' }}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box>
                            <BusIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                {galleryImages.length}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                תמונות בגלריה
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                100%
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                שירות מקצועי
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                24/7
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                זמינות
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            {/* Gallery Grid */}
            <Grid container spacing={3}>
                {galleryImages.map((image) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={image.id}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                sx={{
                                    height: 200,
                                    objectFit: 'contain',
                                    p: 2,
                                    backgroundColor: 'grey.50',
                                }}
                                image={image.src}
                                alt={image.title}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/images/transport.png'; // fallback image
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <Chip
                                    label={image.category}
                                    size="small"
                                    color="primary"
                                    sx={{ mb: 2 }}
                                />
                                <Typography
                                    variant="h6"
                                    component="h3"
                                    sx={{ fontWeight: 'bold', mb: 1 }}
                                >
                                    {image.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.6 }}
                                >
                                    {image.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Call to Action */}
            <Box
                sx={{
                    textAlign: 'center',
                    mt: 6,
                    p: 4,
                    background: 'linear-gradient(135deg, #ffa000 0%, #ffb300 100%)',
                    color: 'white',
                    borderRadius: 3,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    מעוניינים בשירותי ההסעות שלנו?
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                    צרו קשר עכשיו לקבלת הצעת מחיר ולתיאום הסעה
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="tel:054-5927803" style={{ textDecoration: 'none' }}>
                        <Chip
                            label="טלפון: 054-5927803"
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.3)',
                                },
                            }}
                        />
                    </a>
                    <a href="https://wa.me/972545927803" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Chip
                            label="WhatsApp "
                            sx={{
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                color: 'white',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.3)',
                                },
                            }}
                        />
                    </a>
                </Box>
            </Box>
        </Container>
    );
};

export default GalleryPage;
