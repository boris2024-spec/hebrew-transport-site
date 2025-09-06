import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    useMediaQuery,
    useTheme as useMuiTheme,
    Switch,
    FormControlLabel,
    Box,
    Container,
} from '@mui/material';
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Info as InfoIcon,
    Build as ServicesIcon,
    ContactMail as ContactIcon,
    Assignment as FormIcon,
    Business as AboutIcon,
    PhotoLibrary as GalleryIcon,
    Brightness4,
    Brightness7,
    WhatsApp,
    Bolt,
    Share as ShareIcon
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const menuItems = [
    { text: 'בית', icon: <HomeIcon />, path: '/' },
    { text: 'אודות', icon: <AboutIcon />, path: '/about' },
    { text: 'שירותים', icon: <ServicesIcon />, path: '/services' },
    { text: 'גלריה', icon: <GalleryIcon />, path: '/gallery' },
    { text: 'הזמנה ', icon: <FormIcon />, path: '/booking' },
    { text: 'מידע שימושי ', icon: <InfoIcon />, path: '/info' },
    { text: 'יצירת קשר ', icon: <ContactIcon />, path: '/contact' },
];

const Header: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const muiTheme = useMuiTheme();
    const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Check this out!',
                url: window.location.href,
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            // Fallback for browsers that don't support the Web Share API
            const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
            window.open(shareUrl, '_blank');
        }
    };

    const drawer = (
        <Box sx={{ width: 250, p: 2 }} role="navigation">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                <img
                    src="/images/logo-01.png"
                    alt="מסיעי דימונה לוגו"
                    style={{
                        height: '40px',
                        width: 'auto',
                        marginRight: '8px'
                    }}
                />
                <Typography variant="h6" sx={{ textAlign: 'center' }}>
                    מסיעי דימונה
                </Typography>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.text}
                        component={Link}
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        sx={{
                            backgroundColor: location.pathname === item.path ? 'action.selected' : 'transparent',
                            borderRadius: 1,

                            mb: 0.5,
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                            '&:focus-visible': {
                                outline: '2px solid',
                                outlineColor: 'primary.main',
                            },
                        }}
                        aria-current={location.pathname === item.path ? 'page' : undefined}
                    >
                        <ListItemIcon sx={{ color: 'inherit' }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

            <Box sx={{ mt: 'auto', pt: 2 }}>
                <ListItem
                    component="a"
                    href="https://wa.me/972545927803"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        borderRadius: 1,
                        mb: 1,
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: 'action.hover',
                        },
                        '&:focus-visible': {
                            outline: '2px solid',
                            outlineColor: 'primary.main',
                        },
                    }}
                    aria-label="שלח הודעה בוואטסאפ: 054-5927803"
                >
                    <ListItemIcon sx={{ color: '#25D366' }}>
                        <WhatsApp />
                    </ListItemIcon>
                    <ListItemText primary="וואטסאפ" />
                </ListItem>

                <ListItem
                    onClick={handleShare}
                    sx={{
                        borderRadius: 1,
                        mb: 1,
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: 'action.hover',
                        },
                        '&:focus-visible': {
                            outline: '2px solid',
                            outlineColor: 'primary.main',
                        },
                    }}
                    aria-label="שתף דף זה"
                >
                    <ListItemIcon sx={{ color: 'white' }}>
                        <ShareIcon />
                    </ListItemIcon>
                    <ListItemText primary="שתף" />
                </ListItem>

                <FormControlLabel
                    control={
                        <Switch
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            name="darkMode"
                            inputProps={{ 'aria-label': 'החלף מצב תצוגה' }}
                        />
                    }
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                            מצב {isDarkMode ? 'בהיר' : 'כהה'}
                        </Box>
                    }
                />
            </Box>
        </Box>
    );

    return (
        <>
            <AppBar
                position="sticky"
                sx={{
                    backgroundColor: 'background.paper',
                    color: 'text.primary',
                    borderBottom: 1,
                    borderColor: 'divider',
                    opacity: 0.93,
                }}
                role="banner"
            >
                <Container maxWidth={false} sx={{ maxWidth: '1800px', px: 2 }}>
                    <Toolbar>
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                aria-label="פתח תפריט ניווט"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        <Box
                            component={Link}
                            to="/"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                '&:focus-visible': {
                                    outline: '2px solid',
                                    outlineColor: 'primary.main',
                                    borderRadius: 1,
                                },
                            }}
                        >
                            <img
                                src="/images/logo-01.png"
                                alt="מסיעי דימונה לוגו"
                                style={{
                                    height: isMobile ? '32px' : '40px',
                                    width: 'auto',
                                    marginLeft: '12px'
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: { xs: '1.7rem', md: '1.9rem' },
                                    fontWeight: 'bold',
                                }}
                            >
                                מסיעי דימונה
                            </Typography>
                        </Box>

                        {!isMobile && (
                            <Box sx={{
                                display: 'flex',
                                gap: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexGrow: 1
                            }}>
                                {menuItems.map((item) => (
                                    <Button
                                        key={item.text}
                                        color="inherit"
                                        component={Link}
                                        to={item.path}
                                        startIcon={item.icon}
                                        sx={{
                                            backgroundColor: location.pathname === item.path ? 'action.selected' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: 'action.hover',
                                            },
                                            '&:focus-visible': {
                                                outline: '2px solid',
                                                outlineColor: 'primary.main',
                                            },
                                        }}
                                        aria-current={location.pathname === item.path ? 'page' : undefined}
                                    >
                                        {item.text}
                                    </Button>
                                ))}

                                <IconButton
                                    href="https://wa.me/972545927803"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="inherit"
                                    aria-label="שלח הודעה בוואטסאפ: 054-5927803"
                                    sx={{
                                        color: '#25D366', // WhatsApp green color
                                        '&:hover': {
                                            backgroundColor: 'action.hover',
                                        },
                                        '&:focus-visible': {
                                            outline: '2px solid',
                                            outlineColor: 'primary.main',
                                        },
                                    }}
                                >
                                    <WhatsApp />
                                </IconButton>

                                <IconButton
                                    onClick={handleShare}
                                    color="inherit"
                                    aria-label="שתף דף זה"
                                    sx={{
                                        '&:hover': {
                                            backgroundColor: 'action.hover',
                                        },
                                        '&:focus-visible': {
                                            outline: '2px solid',
                                            outlineColor: 'primary.main',

                                        },
                                    }}
                                >
                                    <ShareIcon />
                                </IconButton>

                                <IconButton
                                    onClick={toggleTheme}
                                    color="inherit"
                                    aria-label={`החלף ל${isDarkMode ? 'מצב בהיר' : 'מצב כהה'}`}
                                    sx={{
                                        '&:focus-visible': {
                                            outline: '2px solid',
                                            outlineColor: 'primary.main',
                                        },
                                    }}
                                >
                                    {isDarkMode ? <Brightness7 /> : <Brightness4 />}
                                </IconButton>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                variant="temporary"
                anchor="left"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 250,
                        backgroundColor: 'primary.light',
                        color: 'white', // Белый цвет текста
                        '& .MuiListItemText-primary': {
                            color: 'white' // Цвет текста пунктов меню
                        },
                        '& .MuiListItemIcon-root': {
                            color: 'white' // Цвет иконок
                        }
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Header;
