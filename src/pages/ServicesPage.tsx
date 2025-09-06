import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
    Divider,
    Link, // добавить этот импорт
} from '@mui/material';
import {
    DirectionsBus,
    LocalTaxi,
    Flight,
    Event,
    Schedule,
    Star,
    CheckCircle,
    Phone,
    School,
} from '@mui/icons-material';

const ServicesPage: React.FC = () => {
    const services = [
        {
            title: 'מוניות פרטיות',
            icon: <LocalTaxi fontSize="large" />,
            description: 'שירות מוניות אמין ומקצועי לכל יעד בארץ',
            features: [
                'זמינות 24/7',
                'נהגים מנוסים',
                'רכבים נוחים ומודרניים',
                'תמחור הוגן ושקוף',
                'אפשרות הזמנה מראש',
            ],
            pricing: 'החל מ-15 ₪ לק"מ',
        },
        {
            title: 'הסעות קבוצתיות',
            icon: <DirectionsBus fontSize="large" />,
            description: 'הסעות לקבוצות, אירועים וטיולים מאורגנים',
            features: [
                'מיניבוסים ואוטובוסים',
                'עד 50 נוסעים',
                'מתאים לאירועים',
                'תכנון מסלול מותאם',
                'מחירים מיוחדים לקבוצות',
            ],
            pricing: 'החל מ-300 ₪ ליום',
        },
        {
            title: 'הסעות לנמל התעופה',
            icon: <Flight fontSize="large" />,
            description: 'הסעות נוחות ובטוחות לנמל התעופה בן גוריון ואילת',
            features: [
                'שירות מיוחד לנמל התעופה',
                'מעקב טיסות',
                'זמן המתנה גמיש',
                'מחיר קבוע',
                'איסוף מכל מקום בדימונה',
            ],
            pricing: '280 ₪ לנמל התעופה בן גוריון',
        },
        {
            title: 'אירועים מיוחדים',
            icon: <Event fontSize="large" />,
            description: 'שירותי תחבורה לחתונות, בר מצווה ואירועים מיוחדים',
            features: [
                'רכבי יוקרה',
                'תיאום מלא עם האירוע',
                'נהגים בלבוש מכובד',
                'גמישות בזמנים',
                'שירות מותאם אישית',
            ],
            pricing: 'הצעת מחיר אישית',
        },
        {
            title: ' הסעות למוסדות חינוך',
            icon: <School fontSize="large" />,
            description: 'שירותי הסעה בטוחים ואמינים לתלמידים ולמוסדות חינוך',
            features: [
                'הסעות יומיות לבתי ספר',
                'בטיחות מירבית לתלמידים',
                'נהגים מורשים ומיומנים',
                'רכבים מיועדים להסעת ילדים',
                'תיאום עם לוח השעות של בית הספר',
            ],
            pricing: 'הצעת מחיר אישית לפי מסלול',
        },
        {
            title: ' הסעות עובדים',
            icon: <DirectionsBus fontSize="large" />,
            description: 'שירותי הסעה יומיים לעובדים ולחברות בכל רחבי הארץ',
            features: [
                'הסעות קבועות ליום העבודה',
                'מיניבוסים ואוטובוסים נוחים',
                'נהגים מקצועיים ואמינים',
                'תיאום עם לוחות זמנים של החברה',
                'מחירים מועדפים לחוזים ארוכי טווח',
            ],
            pricing: 'הצעת מחיר אישית לפי מסלול ותדירות',
        },
    ];

    const additionalServices = [
        'הסעות לבתי חולים ובתי מרפא',
        'נסיעות ותחבורה לעסקים',
        'הסעות לבסיסי צה״ל',
        'טיולי פנאי, טבע ונופש',
        'הסעות לקניונים ומרכזי קניות',
        'נסיעות למוסדות חינוך וקהילה',
    ];


    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* כותרת */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    השירותים שלנו
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    מגוון רחב של פתרונות תחבורה לכל צורך
                </Typography>
            </Box>

            {/* שירותים עיקריים */}
            <Grid container spacing={4} sx={{ mb: 6 }}>
                {services.map((service, index) => (
                    <Grid size={{ xs: 12, md: 6 }} key={index}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Box sx={{ color: 'primary.main', mr: 2 }}>
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h4" component="h2">
                                        {service.title}
                                    </Typography>
                                </Box>

                                <Typography variant="body1" paragraph color="text.secondary">
                                    {service.description}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                <Typography variant="h6" gutterBottom>
                                    מה כלול בשירות:
                                </Typography>
                                <List dense>
                                    {service.features.map((feature, featureIndex) => (
                                        <ListItem key={featureIndex} sx={{ px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                                                <CheckCircle color="primary" fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary={feature} />
                                        </ListItem>
                                    ))}
                                </List>

                                <Box sx={{
                                    mt: 2,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    '& .phone-link:hover': {
                                        transform: 'scale(1.1)',
                                        transition: 'transform 0.3s ease'
                                    }
                                }}>
                                    <Chip
                                        label={service.pricing}
                                        color="secondary"
                                        variant="outlined"
                                        sx={{ fontWeight: 'bold' }}
                                    />
                                    <Link
                                        href="tel:086555678"
                                        variant="body2"
                                        color="inherit"
                                        underline="none"
                                        className="phone-link"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.2)'
                                            }
                                        }}
                                    >
                                        <Phone fontSize="small" sx={{ mr: 0.5 }} />
                                        08-6555678
                                    </Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* שירותים נוספים */}
            <Card sx={{ p: 4, backgroundColor: 'background.paper' }}>
                <Typography variant="h4" component="h2" gutterBottom textAlign="center">
                    שירותים נוספים
                </Typography>
                <Typography variant="body1" paragraph textAlign="center" color="text.secondary">
                    בנוסף לשירותים העיקריים, אנו מספקים פתרונות תחבורה למגוון צרכים נוספים
                </Typography>

                <Grid container spacing={2} justifyContent="center">
                    {additionalServices.map((service, index) => (
                        <Grid key={index}>
                            <Chip
                                label={service}
                                variant="outlined"
                                sx={{ m: 0.5, fontSize: '1rem', p: 2 }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Card>

            {/* יתרונות */}
            <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    למה לבחור בנו?
                </Typography>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box>
                            <Schedule color="primary" sx={{ fontSize: '3rem', mb: 1 }} />
                            <Typography variant="h6" gutterBottom>
                                זמינות 24/7
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                אנו כאן בשבילכם בכל שעה ובכל יום
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box>
                            <Star color="primary" sx={{ fontSize: '3rem', mb: 1 }} />
                            <Typography variant="h6" gutterBottom>
                                שירות מעולה
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                מחויבים לספק חוויית נסיעה נעימה
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box>
                            <CheckCircle color="primary" sx={{ fontSize: '3rem', mb: 1 }} />
                            <Typography variant="h6" gutterBottom>
                                אמינות מלאה
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                מגיעים בזמן ועומדים בהתחייבויות
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ServicesPage;
