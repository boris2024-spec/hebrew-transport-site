import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
} from '@mui/material';
import {
    ExpandMore,
    Info,
    Security,
    Payment,
    Schedule,
    LocalTaxi,
    Phone,
    CheckCircle,
    Warning,
} from '@mui/icons-material';

const InfoPage: React.FC = () => {
    const faqs = [
        {
            question: 'איך אפשר להזמין נסיעה?',
            answer: 'ניתן להזמין נסיעה בכמה דרכים: טלפון 08-6566234, וואטסאפ 050-6566234, או דרך טופס ההזמנה באתר. אנו זמינים 24/7 לשירותכם.',
        },
        {
            question: 'כמה זמן מראש צריך להזמין?',
            answer: 'לנסיעות רגילות ניתן להזמין גם ברגע האחרון. לנסיעות לנמל התעופה או אירועים מיוחדים מומלץ להזמין לפחות יום מראש.',
        },
        {
            question: 'מה אמצעי התשלום הזמינים?',
            answer: 'אנו מקבלים מזומן, כרטיס אשראי, העברה בנקאית ותשלום דרך אפליקציות כמו ביט ופייבוקס.',
        },
        {
            question: 'האם הרכבים מבוטחים?',
            answer: 'כן, כל הרכבים שלנו מבוטחים בביטוח מקיף וכל הנהגים בעלי רישיון תקף ורקע נקי.',
        },
        {
            question: 'מה קורה אם הנהג מאחר?',
            answer: 'אם הנהג מאחר יותר מ-10 דקות, נחזיר חלק מהתשלום או נספק פיצוי מתאים בהתאם למצב.',
        },
        {
            question: 'האם אפשר לבטל הזמנה?',
            answer: 'ניתן לבטל הזמנה עד שעה לפני הזמן שנקבע ללא תשלום. ביטול בפרק זמן קצר יותר עלול לכלול עמלת ביטול.',
        },
    ];

    const policies = [
        {
            title: 'מדיניות תשלומים',
            icon: <Payment color="primary" />,
            content: [
                'תשלום במזומן או כרטיס אשראי',
                'לנסיעות ארוכות יש אפשרות לתשלום מראש',
                'קבלה תינתן בסיום כל נסיעה',
                'עמלת ביטול: 10% מעלות הנסיעה',
            ],
        },
        {
            title: 'כללי בטיחות',
            icon: <Security color="primary" />,
            content: [
                'חגירת חגורת בטיחות חובה לכל הנוסעים',
                'אין עישון ברכבים',
                'ילדים מתחת לגיל 8 דורשים מושב בטיחות',
                'נהגים עוברים בדיקות תקופתיות',
            ],
        },
        {
            title: 'שירות לקוחות',
            icon: <Phone color="primary" />,
            content: [
                'זמינות 24/7 לחירום',
                'מענה לפניות תוך 24 שעות',
                'מעקב וניטור כל הנסיעות',
                'שירות תלונות ייעודי',
            ],
        },
    ];

    const tips = [
        'הזמינו נסיעה 15 דקות לפני הזמן הרצוי להגעה',
        'ציינו תמיד מספר טלפון זמין לתיאום',
        'לנסיעות עם מזוודות גדולות - ציינו מראש',
        'שמרו על קבלות לצורכי החזר הוצאות',
        'לאירועים מיוחדים הזמינו כמה ימים מראש',
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            {/* כותרת */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                    <Info color="primary" sx={{ mr: 2, fontSize: '3rem' }} />
                    <Typography variant="h2" component="h1" gutterBottom>
                        מידע נוסף
                    </Typography>
                </Box>
                <Typography variant="h5" color="text.secondary" paragraph>
                    כל מה שאתם צריכים לדעת על השירותים שלנו
                </Typography>
            </Box>

            {/* התראה חשובה */}


            {/* מדיניות ותנאים */}
            <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 3 }}>
                מדיניות ותנאי שירות
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6 }}>
                {policies.map((policy, index) => (
                    <Card key={index} sx={{ flex: 1 }}>
                        <CardContent sx={{ p: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                {policy.icon}
                                <Typography variant="h5" component="h3" sx={{ ml: 1 }}>
                                    {policy.title}
                                </Typography>
                            </Box>
                            <List dense>
                                {policy.content.map((item, itemIndex) => (
                                    <ListItem key={itemIndex} sx={{ px: 0 }}>
                                        <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                                            <CheckCircle color="primary" fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* שאלות נפוצות */}
            <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 3 }}>
                שאלות נפוצות
            </Typography>

            <Box sx={{ mb: 6 }}>
                {faqs.map((faq, index) => (
                    <Accordion key={index} sx={{ mb: 1 }}>
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            aria-controls={`faq-content-${index}`}
                            id={`faq-header-${index}`}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" color="text.secondary">
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

            {/* טיפים לנסיעה */}
            <Card sx={{ mb: 6, p: 4, backgroundColor: 'primary.light' }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'primary' }}>
                    טיפים לנסיעה נעימה
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {tips.map((tip, index) => (
                        <Chip
                            key={index}
                            label={tip}
                            variant="outlined"
                            sx={{
                                m: 0.5,
                                backgroundColor: 'white',
                                '& .MuiChip-label': {
                                    fontSize: '0.9rem',
                                    whiteSpace: 'normal',
                                    textAlign: 'center',
                                    color: 'black',
                                },
                            }}
                        />
                    ))}
                </Box>
            </Card>

            {/* אזהרות ותנאים */}
            <Card sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Warning color="warning" sx={{ mr: 2, fontSize: '2rem' }} />
                    <Typography variant="h4" component="h2">
                        הערות חשובות
                    </Typography>
                </Box>

                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Info color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="זמני הגעה"
                            secondary="זמני ההגעה הם משוערים ועלולים להשתנות בהתאם לתנאי דרך ועומס תנועה"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <LocalTaxi color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="רכבים חלופיים"
                            secondary="במקרים נדירים אנו עשויים לספק רכב חלופי מאותו סוג ברמת נוחות דומה"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <Schedule color="primary" />
                        </ListItemIcon>
                        <ListItemText
                            primary="שינוי זמנים"
                            secondary="שינויים בזמני הנסיעה יתואמו מראש ועלולים לכלול עלות נוספת"
                        />
                    </ListItem>
                </List>
            </Card>
        </Container>
    );
};

export default InfoPage;
