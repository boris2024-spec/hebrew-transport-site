import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Grid,
    Avatar,
    Chip,
} from '@mui/material';
import {
    History,
    Star,
    Security,
    EmojiTransportation,
    Groups,
    CheckCircle,
} from '@mui/icons-material';

export { };

const AboutPage: React.FC = () => {
    const stats = [
        { number: '15+', label: 'שנות ניסיון', icon: <History fontSize="large" /> },
        { number: '5000+', label: 'לקוחות מרוצים', icon: <Groups fontSize="large" /> },
        { number: '25+', label: 'רכבים בשירות', icon: <EmojiTransportation fontSize="large" /> },
        { number: '24/7', label: 'זמינות', icon: <Star fontSize="large" /> },
    ];

    const values = [
        {
            title: 'בטיחות מעל הכל',
            description: 'כל הרכבים שלנו עוברים בדיקות תקופתיות ומבוטחים במלוא',
            icon: <Security fontSize="large" color="primary" />,
        },
        {
            title: 'אמינות ודיוק',
            description: 'אנו מתחייבים להגיע בזמן ולקיים כל הזמנה',
            icon: <CheckCircle fontSize="large" color="primary" />,
        },
        {
            title: 'שירות מקצועי',
            description: 'צוות נהגים מנוסים ומקצועיים עם ידע מעמיק של האזור',
            icon: <Star fontSize="large" color="primary" />,
        },
    ];

    const team = [
        {
            name: 'דוד כהן',
            role: 'מנהל ומייסד',
            experience: '20 שנות ניסיון בתחום התחבורה',
            avatar: 'ד',
        },
        {
            name: 'מרים לוי',
            role: 'מנהלת תפעול',
            experience: '15 שנות ניסיון בניהול צי רכבים',
            avatar: 'מ',
        },
        {
            name: 'יוסי אברהם',
            role: 'נהג ראשי',
            experience: '18 שנות ניסיון בנהיגה מקצועית',
            avatar: 'י',
        },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* כותרת */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    אודותינו
                </Typography>
                <Typography variant="h5" color="text.secondary" paragraph>
                    המובילים בשירותי תחבורה בדימונה ובאזור הדרום
                </Typography>
            </Box>

            {/* סיפור החברה */}
            <Card sx={{ mb: 6, p: 4 }}>
                <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                        הסיפור שלנו
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        דימונה תחבורה הוקמה ב-2008 על ידי דוד כהן, תושב דימונה ותיק עם חזון ברור -
                        לספק שירותי תחבורה איכותיים ואמינים לתושבי דימונה ואזור הדרום.
                        החל ממונית יחידה, החברה גדלה והתפתחה לאורך השנים לחברת תחבורה מובילה באזור.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                        אנו מאמינים שכל נסיעה היא הזדמנות לספק חוויה מעולה. הצוות שלנו מורכב מנהגים
                        מנוסים ומקצועיים הפועלים מתוך מחויבות לבטיחות, אמינות ושירות מעולה.
                        היום אנו מפעילים צי של יותר מ-25 רכבים ומספקים שירותים מגוונים החל ממוניות
                        פרטיות ועד הסעות קבוצתיות גדולות.
                    </Typography>
                </CardContent>
            </Card>

            {/* סטטיסטיקות */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
                    המספרים מדברים בעד עצמם
                </Typography>
                <Grid container spacing={4}>
                    {stats.map((stat, index) => (
                        <Grid size={{ xs: 6, md: 3 }} key={index}>
                            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                                <Box sx={{ color: 'primary.main', mb: 2 }}>
                                    {stat.icon}
                                </Box>
                                <Typography variant="h3" component="div" color="primary.main" gutterBottom>
                                    {stat.number}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {stat.label}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* הערכים שלנו */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
                    הערכים שלנו
                </Typography>
                <Grid container spacing={4}>
                    {values.map((value, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                                <Box sx={{ mb: 2 }}>
                                    {value.icon}
                                </Box>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    {value.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {value.description}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* הצוות */}
            <Box sx={{ mb: 6 }}>
                <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
                    הצוות שלנו
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {team.map((member, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                                <Avatar
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        mx: 'auto',
                                        mb: 2,
                                        bgcolor: 'primary.main',
                                        fontSize: '2rem',
                                    }}
                                >
                                    {member.avatar}
                                </Avatar>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    {member.name}
                                </Typography>
                                <Chip
                                    label={member.role}
                                    color="primary"
                                    variant="outlined"
                                    sx={{ mb: 2 }}
                                />
                                <Typography variant="body2" color="text.secondary">
                                    {member.experience}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* רישיונות והסמכות */}
            <Card sx={{ p: 4, backgroundColor: 'primary.main', color: 'white' }}>
                <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
                    רישיונות והסמכות
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <CheckCircle sx={{ fontSize: '3rem', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                רישיון משרד התחבורה
                            </Typography>
                            <Typography variant="body2">
                                רישיון תקף לשירותי תחבורה ציבורית
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Security sx={{ fontSize: '3rem', mb: 2 }} />
                            <Typography variant="h6" gutterBottom>
                                ביטוח מקיף
                            </Typography>
                            <Typography variant="body2">
                                ביטוח מלא לכל הרכבים והנוסעים
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export default AboutPage;
