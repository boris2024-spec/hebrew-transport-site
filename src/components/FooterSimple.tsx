import React from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
  
    IconButton,
    Link
} from '@mui/material';
import {
    Facebook,
    Instagram,
    WhatsApp,
    Phone,
    Email,
    LocationOn,
    AccessTime,
    PhoneIphone
} from '@mui/icons-material';

const FooterSimple: React.FC = () => {
    return (
        <Box
            component="footer"
            role="contentinfo"
            aria-label="פוטר האתר"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: 4,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={4}>
                    {/* שורה ראשונה - מידע כללי */}
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="space-between">
                        {/* עמודה 1 - שם החברה */}
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                מסיעי דימונה
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                                שירותי תחבורה מתקדמים ואמינים עם דגש על בטיחות ונוחות הנוסעים.
                                פתרונות תחבורה מותאמים אישית לכל צורך.
                            </Typography>
                        </Box>

                        {/* עמודה 2 - פרטי התקשרות */}
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                פרטי התקשרות
                            </Typography>
                            <Stack spacing={1}>
                                <Link
                                    href="tel:08-6555678"
                                    color="inherit"
                                    underline="none"
                                    aria-label="התקשר לטלפון: 08-6555678"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    <Phone fontSize="small" />
                                    08-6555678
                                </Link>

                                <Link
                                    href="tel:054-5927803"
                                    color="inherit"
                                    underline="none"
                                    aria-label="התקשר לנייד: 054-5927803"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    <PhoneIphone fontSize="small" />
                                    054-5927803
                                </Link>

                                <Link
                                    href="mailto:mdimona2018@gmail.com"
                                    color="inherit"
                                    underline="none"
                                    aria-label="שלח אימייל לכתובת: mdimona2018@gmail.com"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    <Email fontSize="small" />
                                    mdimona2018@gmail.com
                                </Link>

                                <Link
                                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13669.250906474774!2d35.018894265207514!3d31.07322701951478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x150245e9c052bc57%3A0x5a7ba03301f590b7!2z157XodeZ16LXmSDXk9eZ157Xldeg15Q!5e0!3m2!1sru!2sil!4v1757113767696!5m2!1sru!2sil"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="inherit"
                                    underline="none"
                                    aria-label="פתח מיקום בגוגל מפות: נווה דוד 22, דימונה"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        '&:hover': { textDecoration: 'underline' }
                                    }}
                                >
                                    <LocationOn fontSize="small" />
                                    נווה דוד 22, דימונה
                                </Link>
                            </Stack>
                        </Box>

                        {/* עמודה 3 - שעות פעילות ורשתות חברתיות */}
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                שעות פעילות
                            </Typography>
                            <Stack spacing={1} sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <AccessTime fontSize="small" aria-hidden="true" />
                                    <Typography variant="body2">
                                        ראשון-חמישי: 06:00-22:00
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{ pr: 3 }}>
                                    שישי: 06:00-15:00
                                </Typography>
                                <Typography variant="body2" sx={{ pr: 3 }}>
                                    שבת: מנוחה
                                </Typography>
                            </Stack>

                            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                עקבו אחרינו
                            </Typography>
                            <Stack direction="row" spacing={1}>
                                <IconButton
                                    size="small"
                                    sx={{ color: 'white' }}
                                    aria-label="עמוד הפייסבוק שלנו"
                                    href="https://www.facebook.com/profile.php?id=100064048477696&locale=ru_RU"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Facebook />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    sx={{ color: 'white' }}
                                    aria-label="עמוד האינסטגרם שלנו"
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Instagram />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    sx={{ color: 'white' }}
                                    aria-label="שלח הודעה בוואטסאפ"
                                    href="https://wa.me/+972545927803"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <WhatsApp />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Stack>

                    {/* קו מפריד */}
                    <Box sx={{ borderTop: 1, borderColor: 'rgba(255,255,255,0.2)', pt: 3 }}>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                כל הזכויות שמורות למסיעי דימונה
                                2025 ©
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                ביצוע בוריס בולמט פרודקשן
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
};

export default FooterSimple;
