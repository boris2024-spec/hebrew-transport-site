import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
    Alert,
    Snackbar,
    CircularProgress,
    SelectChangeEvent,
} from '@mui/material';
import {
    PersonOutline,
    PhoneOutlined,
    EmailOutlined,
    LocationOnOutlined,
    DateRangeOutlined,
    AccessTimeOutlined,
    GroupOutlined,
    Send,
} from '@mui/icons-material';

interface FormData {
    fullName: string;
    phone: string;
    email: string;
    pickupLocation: string;
    destination: string;
    date: string;
    time: string;
    passengers: string;
    serviceType: string;
    notes: string;
}

interface FormErrors {
    [key: string]: string;
}

const BookingPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        phone: '',
        email: '',
        pickupLocation: '',
        destination: '',
        date: '',
        time: '',
        passengers: '',
        serviceType: '',
        notes: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const serviceTypes = [
        { value: 'taxi', label: 'מונית פרטית' },
        { value: 'group', label: 'הסעה קבוצתית' },
        { value: 'airport', label: 'הסעה לנמל התעופה' },
        { value: 'special', label: 'אירוע מיוחד' },
    ];

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // שדות חובה
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'שם מלא הוא שדה חובה';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'טלפון הוא שדה חובה';
        } else if (!/^05\d{8}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
            newErrors.phone = 'מספר טלפון לא תקין (נדרש מספר ישראלי)';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'אימייל הוא שדה חובה';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'כתובת אימייל לא תקינה';
        }

        if (!formData.pickupLocation.trim()) {
            newErrors.pickupLocation = 'מיקום איסוף הוא שדה חובה';
        }

        if (!formData.destination.trim()) {
            newErrors.destination = 'יעד הוא שדה חובה';
        }

        if (!formData.date) {
            newErrors.date = 'תאריך הוא שדה חובה';
        } else {
            const selectedDate = new Date(formData.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (selectedDate < today) {
                newErrors.date = 'לא ניתן לבחור תאריך בעבר';
            }
        }

        if (!formData.time) {
            newErrors.time = 'שעה היא שדה חובה';
        }

        if (!formData.passengers) {
            newErrors.passengers = 'מספר נוסעים הוא שדה חובה';
        } else if (parseInt(formData.passengers) < 1 || parseInt(formData.passengers) > 50) {
            newErrors.passengers = 'מספר נוסעים חייב להיות בין 1 ל-50';
        }

        if (!formData.serviceType) {
            newErrors.serviceType = 'סוג שירות הוא שדה חובה';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (field: keyof FormData) => (
        event: React.ChangeEvent<HTMLInputElement | { value: unknown }>
    ) => {
        const value = event.target.value as string;
        setFormData(prev => ({ ...prev, [field]: value }));

        // נקה שגיאה אם השדה מולא
        if (errors[field] && value.trim()) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleSelectChange = (field: keyof FormData) => (
        event: any
    ) => {
        const value = event.target.value as string;
        setFormData(prev => ({ ...prev, [field]: value }));

        // נקה שגיאה אם השדה מולא
        if (errors[field] && value.trim()) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // סימולציה של שליחת נתונים לשרת
            await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('נתוני הזמנה:', formData);

            // הצג הודעת הצלחה
            setShowSuccess(true);

            // אפס טופס
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                pickupLocation: '',
                destination: '',
                date: '',
                time: '',
                passengers: '',
                serviceType: '',
                notes: '',
            });

        } catch (error) {
            console.error('שגיאה בשליחת הטופס:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const getTodayDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0];
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    הזמנת נסיעה
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                    מלאו את הפרטים למטה ונחזור אליכם בהקדם
                </Typography>
            </Box>

            <Card sx={{ boxShadow: 3 }}>
                <CardContent sx={{ p: 4 }}>
                    <Box component="form" onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={3}>
                            {/* שם מלא */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="שם מלא"
                                    value={formData.fullName}
                                    onChange={handleInputChange('fullName')}
                                    error={!!errors.fullName}
                                    helperText={errors.fullName}
                                    required
                                    InputProps={{
                                        startAdornment: <PersonOutline sx={{ mr: 1, color: 'action.active' }} />,
                                    }}
                                    inputProps={{
                                        'aria-describedby': errors.fullName ? 'fullName-error' : undefined,
                                    }}
                                />
                            </Grid>

                            {/* טלפון */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="מספר טלפון"
                                    value={formData.phone}
                                    onChange={handleInputChange('phone')}
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                    required
                                    placeholder="050-1234567"
                                    InputProps={{
                                        startAdornment: <PhoneOutlined sx={{ mr: 1, color: 'action.active' }} />,
                                    }}
                                    inputProps={{
                                        'aria-describedby': errors.phone ? 'phone-error' : undefined,
                                    }}
                                />
                            </Grid>

                            {/* אימייל */}
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="כתובת אימייל"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange('email')}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    required
                                    InputProps={{
                                        startAdornment: <EmailOutlined sx={{ mr: 1, color: 'action.active' }} />,
                                    }}
                                    inputProps={{
                                        'aria-describedby': errors.email ? 'email-error' : undefined,
                                    }}
                                />
                            </Grid>

                            {/* מיקום איסוף */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="מיקום איסוף"
                                    value={formData.pickupLocation}
                                    onChange={handleInputChange('pickupLocation')}
                                    error={!!errors.pickupLocation}
                                    helperText={errors.pickupLocation}
                                    required
                                    placeholder="כתובת מדויקת"
                                    InputProps={{
                                        startAdornment: <LocationOnOutlined sx={{ mr: 1, color: 'action.active' }} />,
                                    }}
                                    inputProps={{
                                        'aria-describedby': errors.pickupLocation ? 'pickupLocation-error' : undefined,
                                    }}
                                />
                            </Grid>

                            {/* יעד */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="יעד"
                                    value={formData.destination}
                                    onChange={handleInputChange('destination')}
                                    error={!!errors.destination}
                                    helperText={errors.destination}
                                    required
                                    placeholder="כתובת היעד"
                                    InputProps={{
                                        startAdornment: <LocationOnOutlined sx={{ mr: 1, color: 'action.active' }} />,
                                    }}
                                    inputProps={{
                                        'aria-describedby': errors.destination ? 'destination-error' : undefined,
                                    }}
                                />
                            </Grid>

                            {/* תאריך */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="תאריך"
                                    type="date"
                                    value={formData.date}
                                    onChange={handleInputChange('date')}
                                    error={!!errors.date}
                                    helperText={errors.date}
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    inputProps={{ min: getTodayDate() }}
                                    InputProps={{
                                        startAdornment: <DateRangeOutlined sx={{ mr: 1, color: 'action.active' }} />,
                                    }}
                                />
                            </Grid>

                            {/* שעה */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="שעה"
                                    type="time"
                                    value={formData.time}
                                    onChange={handleInputChange('time')}
                                    error={!!errors.time}
                                    helperText={errors.time}
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{
                                        startAdornment: <AccessTimeOutlined sx={{ mr: 1, color: 'action.active' }} />,
                                    }}
                                />
                            </Grid>

                            {/* מספר נוסעים */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <TextField
                                    fullWidth
                                    label="מספר נוסעים"
                                    type="number"
                                    value={formData.passengers}
                                    onChange={handleInputChange('passengers')}
                                    error={!!errors.passengers}
                                    helperText={errors.passengers}
                                    required
                                    InputProps={{
                                        startAdornment: <GroupOutlined sx={{ mr: 1, color: 'action.active' }} />,
                                        inputProps: { min: 1, max: 50 }
                                    }}
                                />
                            </Grid>

                            {/* סוג שירות */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <FormControl fullWidth error={!!errors.serviceType} required>
                                    <InputLabel>סוג שירות</InputLabel>
                                    <Select
                                        value={formData.serviceType}
                                        onChange={handleSelectChange('serviceType')}
                                        label="סוג שירות"
                                    >
                                        {serviceTypes.map((type) => (
                                            <MenuItem key={type.value} value={type.value}>
                                                {type.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    {errors.serviceType && (
                                        <FormHelperText>{errors.serviceType}</FormHelperText>
                                    )}
                                </FormControl>
                            </Grid>

                            {/* הערות */}
                            <Grid size={{ xs: 12 }}>
                                <TextField
                                    fullWidth
                                    label="הערות נוספות"
                                    multiline
                                    rows={4}
                                    value={formData.notes}
                                    onChange={handleInputChange('notes')}
                                    placeholder="פרטים נוספים, דרישות מיוחדות, וכו'"
                                />
                            </Grid>

                            {/* כפתור שליחה */}
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    disabled={isSubmitting}
                                    startIcon={
                                        isSubmitting ? (
                                            <CircularProgress size={20} color="inherit" />
                                        ) : (
                                            <Send />
                                        )
                                    }
                                    sx={{
                                        py: 2,
                                        fontSize: '1.1rem',
                                        '&:focus-visible': {
                                            outline: '2px solid',
                                            outlineColor: 'primary.main',
                                            outlineOffset: '2px',
                                        },
                                    }}
                                >
                                    {isSubmitting ? 'שולח...' : 'שלח הזמנה'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>

            {/* הודעת הצלחה */}
            <Snackbar
                open={showSuccess}
                autoHideDuration={6000}
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setShowSuccess(false)}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    ההזמנה נשלחה בהצלחה! נחזור אליכם בהקדם.
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default BookingPage;
