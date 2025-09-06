import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Grid,
    Link,
    IconButton,
    Button,
    Chip,
} from '@mui/material';
import {
    Phone,
    Email,
    LocationOn,
    WhatsApp,
    Facebook,
    Instagram,
    Schedule,
    Directions,
} from '@mui/icons-material';

const ContactPage: React.FC = () => {
    const contactMethods = [
        {
            icon: <Phone fontSize="large" />,
            title: 'טלפון',
            primary: '08-6555678',
            secondary: 'זמין 24/7',
            action: 'tel:088-6555678',
            color: 'primary' as const,
        },
        {
            icon: <WhatsApp fontSize="large" />,
            title: 'וואטסאפ',
            primary: '0545927803',
            secondary: 'הזמנות ושאלות',
            action: 'https://wa.me/0545927803',
            color: 'success' as const,
        },
        {
            icon: <Email fontSize="large" />,
            title: 'אימייל',
            primary: 'mdimona2018@gmail.com',
            secondary: 'מענה תוך 24 שעות',
            action: 'mailto:mdimona2018@gmail.com',
            color: 'info' as const,
        },
    ];

    const socialMedia = [
        {
            icon: <Facebook />,
            name: 'פייסבוק',
            url: 'https://www.facebook.com/profile.php?id=100064048477696&locale=ru_RU',
        },
        {
            icon: <Instagram />,
            name: 'אינסטגרם',
            url: 'https://www.facebook.com/profile.php?id=100064048477696&locale=ru_RU',
        },
    ];

    const operatingHours = [
        { day: 'ראשון - חמישי', hours: '06:00 - 22:00' },
        { day: 'שישי', hours: '06:00 - 15:00' },
        { day: 'מוצאי שבת', hours: 'שעה לאחר השבת - 22:00' },
        { day: 'שבת', hours: 'חירום בלבד', emergency: true },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* כותרת */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    צור קשר
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    אנחנו כאן בשבילכם - בואו נתחיל לתכנן את הנסיעה שלכם
                </Typography>
            </Box>

            {/* שיטות יצירת קשר */}
            <Grid container spacing={4} sx={{ mb: 6 }}>
                {contactMethods.map((method, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                        <Card
                            sx={{
                                height: '100%',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 4 }}>
                                <Box sx={{ color: `${method.color}.main`, mb: 2 }}>
                                    {method.icon}
                                </Box>
                                <Typography variant="h5" component="h2" gutterBottom>
                                    {method.title}
                                </Typography>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                    {method.primary}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" paragraph>
                                    {method.secondary}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color={method.color}
                                    href={method.action}
                                    target={method.action.startsWith('http') ? '_blank' : undefined}
                                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    sx={{ mt: 2 }}
                                >
                                    צור קשר
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* מידע נוסף */}
            <Grid container spacing={4}>
                {/* שעות פעילות */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ p: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Schedule color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                                <Typography variant="h4" component="h2">
                                    שעות פעילות
                                </Typography>
                            </Box>

                            {operatingHours.map((schedule, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        py: 1.5,
                                        borderBottom: index < operatingHours.length - 1 ? 1 : 0,
                                        borderColor: 'divider',
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                        {schedule.day}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontWeight: 'bold',
                                                color: schedule.emergency ? 'warning.main' : 'text.primary',
                                            }}
                                        >
                                            {schedule.hours}
                                        </Typography>
                                        {schedule.emergency && (
                                            <Chip
                                                label="חירום"
                                                size="small"
                                                color="warning"
                                                sx={{ ml: 1 }}
                                            />
                                        )}
                                    </Box>
                                </Box>
                            ))}

                            <Box sx={{ mt: 3, p: 2, backgroundColor: 'info.light', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ color: 'info.contrastText' }}>
                                    <strong>שירות חירום:</strong> בשבתות וחגים אנו זמינים לשירותי חירום בלבד (בתי חולים, מקרים דחופים)
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* מיקום ומידע נוסף */}
                <Grid size={{ xs: 12, md: 6 }}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent sx={{ p: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <LocationOn color="primary" sx={{ mr: 2, fontSize: '2rem' }} />
                                <Typography variant="h4" component="h2">
                                    המיקום שלנו
                                </Typography>
                            </Box>

                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                רחוב הנשיא 15, דימונה
                            </Typography>
                            <Typography variant="body1" paragraph color="text.secondary">
                                אנחנו ממוקמים במרכז דימונה, קרוב לכל האטרקציות הראשיות ובמרחק נסיעה קצר מכל שכונות העיר.
                            </Typography>

                            <Button
                                variant="outlined"
                                startIcon={<Directions />}
                                href="https://maps.google.com/?q=רחוב הנשיא 15, דימונה"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ mb: 3 }}
                            >
                                נווט אלינו ב-Google Maps
                            </Button>

                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mt: 3 }}>
                                עקבו אחרינו ברשתות החברתיות
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                {socialMedia.map((social, index) => (
                                    <IconButton
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        color="primary"
                                        size="large"
                                        sx={{
                                            '&:focus-visible': {
                                                outline: '2px solid',
                                                outlineColor: 'primary.main',
                                            },
                                        }}
                                        aria-label={`עמוד ${social.name} שלנו`}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Box>

                            <Typography variant="body2" color="text.secondary">
                                הישארו מעודכנים עם הודעות חדשות, מבצעים מיוחדים ועדכונים מהשטח
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* קריאה לפעולה */}
            <Card
                sx={{
                    mt: 6,
                    p: 4,
                    backgroundColor: 'primary.main',
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4" component="h2" gutterBottom>
                    מוכנים לנסיעה?
                </Typography>
                <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
                    צרו קשר עכשיו ונארגן לכם את הנסיעה המושלמת
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                        variant="contained"
                        size="large"
                        href="tel:+972-8-6566234"
                        sx={{
                            backgroundColor: 'white',
                            color: 'primary.main',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.9)',
                            },
                        }}
                    >
                        התקשר עכשיו
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        href="https://wa.me/972506566234"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            '&:hover': {
                                borderColor: 'white',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                            },
                        }}
                    >
                        שלח וואטסאפ
                    </Button>
                </Box>
            </Card>
        </Container>
    );
};

export default ContactPage;
