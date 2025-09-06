import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
} from '@mui/material';
import {
    DirectionsBus,
    LocalTaxi,
    Flight,
    Schedule,
    Security,
    Star,
    Event,
    School,
    Engineering
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <DirectionsBus fontSize="large" />,
        title: 'הסעות קבוצתיות',
        description: 'שירותי הסעה לקבוצות, אירועים ונסיעות מאורגנות',
    },
    {
        icon: <LocalTaxi fontSize="large" />,
        title: 'מוניות פרטיות',
        description: 'שירות מוניות אמין ומקצועי לכל יעד',
    },
    {
        icon: <Flight fontSize="large" />,
        title: 'הסעות לנמל התעופה',
        description: 'הסעות נוחות ובטוחות לנמל התעופה בן גוריון',
    },
    {
        icon: <Engineering fontSize="large" />,
        title: ' הסעות עובדים',
        description: 'שירותי הסעה יומיים לעובדים ולחברות בכל רחבי הארץ',
    },
    {
        icon: <School fontSize="large" />,

        title: ' הסעות למוסדות חינוך',
        description: 'שירותי הסעה בטוחים ואמינים לתלמידים ולמוסדות חינוך',
    },
    {
        icon: <Event fontSize="large" />,
        title: 'אירועים מיוחדים',
        description: 'שירותי תחבורה לחתונות, בר מצווה ואירועים מיוחדים',
    },
];

const features = [
    {
        icon: <Schedule fontSize="large" />,
        title: 'זמינות 24/7',
        description: 'שירות מסביב לשעון בכל ימות השנה',
    },
    {
        icon: <Security fontSize="large" />,
        title: 'בטיחות מעל הכל',
        description: 'נהגים מנוסים ורכבים מבוטחים',
    },
    {
        icon: <Star fontSize="large" />,
        title: 'שירות מעולה',
        description: 'מחויבים לספק חוויית נסיעה נעימה',
    },
];

const HomePage: React.FC = () => {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                    color: 'text.primary',
                    py: 8,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, rgba(255,208,13,0.1) 0%, rgba(25,118,210,0.05) 100%)',
                        zIndex: 0,
                    },
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: { xs: '300px', md: '400px' },
                                }}
                            >

                                <Box
                                    component="img"
                                    src="/images/logo-01.png"
                                    alt="מסיעי דימונה - לוגו החברה"
                                    sx={{
                                        width: { xs: '140%', md: '130%' },
                                        height: 'auto',
                                        marginTop: { xs: '-90px', md: '0' },

                                        objectFit: 'contain',
                                        filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))',
                                        borderRadius: 2,
                                    }}
                                />
                                {/* <DirectionsBus
                                    sx={{
                                        fontSize: { xs: '150px', md: '200px' },
                                        opacity: 0.7,
                                        filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3))',
                                    }}
                                /> */}
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>


                            <Typography
                                variant="h5"
                                component="h2"
                                paragraph
                                sx={{
                                    textAlign: { xs: 'center', md: 'left' },
                                    marginTop: { xs: '-50px', md: '0' },
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    color: '#2c2c2c',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                                }}
                            >
                                חברת מסיעי דימונה בעלת ותק של מעל עשור בתחום ההסעות, החברה מספקת מגוון רחב של רכבי הסעה מפוארים לכל אירוע ולכל מטרה. ברשות החברה כל אישורי הבטיחות והתקנים הנדרשים מטעם משרד התחבורה. החברה בעלת צוות נהגים ותיק, אדיב ומיומן ורכבים שעומדים בסטנדרטים גבוהים של בטיחות, איכות וניקיון.                             </Typography>

                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    component={Link}
                                    to="/booking"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        '&:hover': {
                                            backgroundColor: '#ffcc02', // Темный цвет при наведении
                                            transform: 'translateY(-2px)', // Небольшой подъем
                                        },
                                        '&:focus-visible': {
                                            outline: '2px solid',
                                            outlineColor: 'primary.main',
                                        },
                                    }}
                                >
                                    הזמן נסיעה עכשיו
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    component={Link}
                                    to="/contact"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        '&:hover': {
                                            backgroundColor: '#ffcc02', // Темן цвет при наведении
                                            color: '#ffffffff',
                                            transform: 'translateY(-2px)', // Небольшой подъем
                                        },
                                        '&:focus-visible': {
                                            outline: '2px solid',
                                            outlineColor: 'primary.main',
                                        },
                                    }}
                                >
                                    צור קשר
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

            {/* Services Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography
                    variant="h2"
                    component="h2"
                    textAlign="center"
                    gutterBottom
                    sx={{ mb: 6 }}
                >
                    השירותים שלנו
                </Typography>
                <Grid container spacing={4}>
                    {services.map((service, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 4,
                                    },
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                                    <Box
                                        sx={{
                                            color: 'primary.main',
                                            mb: 2,
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {service.icon}
                                    </Box>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                                    <Button
                                        variant="outlined"
                                        component={Link}
                                        to="/services"
                                        sx={{
                                            '&:focus-visible': {
                                                outline: '2px solid',
                                                outlineColor: 'primary.main',
                                            },
                                        }}
                                    >
                                        קרא עוד
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Features Section */}
            <Box sx={{ backgroundColor: 'background.default', py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h2"
                        component="h2"
                        textAlign="center"
                        gutterBottom
                        sx={{ mb: 6 }}
                    >
                        למה לבחור בנו?
                    </Typography>
                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid size={{ xs: 12, md: 4 }} key={index}>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        p: 3,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: 'secondary.main',
                                            mb: 2,
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {feature.icon}
                                    </Box>
                                    <Typography variant="h5" component="h3" gutterBottom>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box
                    sx={{
                        textAlign: 'center',
                        backgroundColor: 'primary.main',
                        color: 'white',
                        p: 6,
                        borderRadius: 2,
                    }}
                >
                    <Typography variant="h3" component="h2" gutterBottom>
                        מוכנים לנסיעה?
                    </Typography>
                    <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
                        הזמינו את הנסיעה שלכם עוד היום וחוו שירות מעולה
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        component={Link}
                        to="/booking"
                        sx={{
                            backgroundColor: 'white',
                            color: 'primary.main',
                            px: 4,
                            py: 1.5,
                            fontSize: '1.1rem',
                            mt: 2,
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.9)',
                            },
                            '&:focus-visible': {
                                outline: '2px solid white',
                                outlineOffset: '2px',
                            },
                        }}
                    >
                        הזמן עכשיו
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default HomePage;
