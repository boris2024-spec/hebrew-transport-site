import React from 'react';
import {
    Box,
    Container,
    Typography,
    Link,
    IconButton,
    Divider,
    Grid,
} from '@mui/material';
import {
    Phone,
    Email,
    LocationOn,
    Facebook,
    Instagram,
    WhatsApp,
} from '@mui/icons-material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'background.paper',
                borderTop: 1,
                borderColor: 'divider',
                mt: 'auto',
                py: 4,
            }}
            role="contentinfo"
        >
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            דימונה מסיעי
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                            שירותי תחבורה מקצועיים ואמינים בדימונה ובאזור הדרום.
                            אנו מספקים פתרונות תחבורה איכותיים למגוון צרכים.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            פרטי התקשרות
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Phone fontSize="small" color="primary" />
                                <Link
                                    href="tel:+972-8-6566234"
                                    color="text.secondary"
                                    sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                    aria-label="התקשר אלינו"
                                >
                                    08-6566234
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Email fontSize="small" color="primary" />
                                <Link
                                    href="mailto:info@dimona-transport.co.il"
                                    color="text.secondary"
                                    sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                    aria-label="שלח אימייל"
                                >
                                    info@dimona-transport.co.il
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOn fontSize="small" color="primary" />
                                <Typography variant="body2" color="text.secondary">
                                    רחוב הנשיא 15, דימונה
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                            עקבו אחרינו
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                            <IconButton
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="primary"
                                aria-label="עמוד הפייסבוק שלנו"
                                sx={{
                                    '&:focus-visible': {
                                        outline: '2px solid',
                                        outlineColor: 'primary.main',
                                    },
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="primary"
                                aria-label="עמוד האינסטגרם שלנו"
                                sx={{
                                    '&:focus-visible': {
                                        outline: '2px solid',
                                        outlineColor: 'primary.main',
                                    },
                                }}
                            >
                                <Instagram />
                            </IconButton>
                            <IconButton
                                href="https://wa.me/972506566234"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="primary"
                                aria-label="צרו קשר בוואטסאפ"
                                sx={{
                                    '&:focus-visible': {
                                        outline: '2px solid',
                                        outlineColor: 'primary.main',
                                    },
                                }}
                            >
                                <WhatsApp />
                            </IconButton>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            שעות פעילות: ראשון-חמישי 06:00-22:00<br />
                            שישי: 06:00-15:00<br />
                            מוצ"ש: שעה לאחר השבת-22:00
                        </Typography>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                    }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © 2025 דימונה תחבורה. כל הזכויות שמורות.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        האתר עומד בתקן נגישות ישראלי 5568 - רמת AA
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
