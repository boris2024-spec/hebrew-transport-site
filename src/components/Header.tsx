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
    Brightness4,
    Brightness7,
    WhatsApp,
    Bolt,
} from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const menuItems = [
    { text: 'בית', icon: <HomeIcon />, path: '/' },
    { text: 'אודות', icon: <AboutIcon />, path: '/about' },
    { text: 'שירותים', icon: <ServicesIcon />, path: '/services' },
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

    const drawer = (
        <Box sx={{ width: 250, p: 2 }} role="navigation">
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
                מסיעי דימונה             </Typography>
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
                }}
                role="banner"
            >
                <Container maxWidth="lg">
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

                        <Typography
                            variant="h6"
                            component={Link}
                            to="/"
                            sx={{
                                
                                flexGrow: 1,
                                fontSize: { xs: '1.7rem', md: '1.9rem' }, // Увеличенный размер шрифта
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                color: 'inherit',
                                '&:focus-visible': {
                                    outline: '2px solid',
                                    outlineColor: 'primary.main',
                                    borderRadius: 1,
                                },
                            }}
                        >
                            מסיעי דימונה
                        </Typography>

                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
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
