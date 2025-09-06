import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <Fab
            size="medium"
            onClick={scrollToTop}
            sx={{
                position: 'fixed',
                bottom: 40,
                right: 20,
                zIndex: 1000,
                backgroundColor: '#ffcc00ff',
                opacity: 0.8,
                color: '#000000', // цвет иконки
                '&:hover': {
                    backgroundColor: '#e6b800', // цвет при наведении
                },
            }}
        >
            <ExpandLessIcon />
        </Fab>
    );
};

export default ScrollToTop;