import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
    Alert,
    Snackbar,
    CircularProgress,
    SelectChangeEvent,
    Stack,
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
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value;
        setFormData(prev => ({ ...prev, [field]: value }));

        if (errors[field] && value.trim()) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value;
        setFormData(prev => ({ ...prev, serviceType: value }));

        if (errors.serviceType && value) {
            setErrors(prev => ({ ...prev, serviceType: '' }));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

            // הכן את התוכן HTML של המייל
            const serviceTypeLabel = serviceTypes.find(type => type.value === formData.serviceType)?.label || formData.serviceType;

            const emailHTML = `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; direction: rtl;">
                    <h2 style="color: #1976d2; text-align: center;">הזמנת נסיעה חדשה</h2>
                    <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">פרטי הלקוח:</h3>
                        <p><strong>שם מלא:</strong> ${formData.fullName}</p>
                        <p><strong>טלפון:</strong> ${formData.phone}</p>
                        <p><strong>אימייל:</strong> ${formData.email}</p>
                    </div>
                    <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #333; margin-top: 0;">פרטי הנסיעה:</h3>
                        <p><strong>נקודת איסוף:</strong> ${formData.pickupLocation}</p>
                        <p><strong>יעד:</strong> ${formData.destination}</p>
                        <p><strong>תאריך:</strong> ${formData.date}</p>
                        <p><strong>שעה:</strong> ${formData.time}</p>
                        <p><strong>מספר נוסעים:</strong> ${formData.passengers}</p>
                        <p><strong>סוג שירות:</strong> ${serviceTypeLabel}</p>
                        ${formData.notes ? `<p><strong>הערות:</strong> ${formData.notes}</p>` : ''}
                    </div>
                    <div style="text-align: center; margin: 20px 0;">
                        <p style="color: #666;">ניתן ליצור קשר עם הלקוח בטלפון: <strong>${formData.phone}</strong></p>
                    </div>
                </div>
            `;

            // שלח מייל לבעל העסק
            const response = await fetch(`${API_URL}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    to: 'boriaa85@gmail.com', // כתובת המייל שלך
                    subject: `הזמנת נסיעה חדשה מ-${formData.fullName}`,
                    html: emailHTML,
                    text: `הזמנת נסיעה מ-${formData.fullName}, טלפון: ${formData.phone}, מ-${formData.pickupLocation} ל-${formData.destination} בתאריך ${formData.date} בשעה ${formData.time}`
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'שגיאה בשליחת האימייל');
            }

            // שלח מייל אישור ללקוח
            if (formData.email) {
                await fetch(`${API_URL}/send-email`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        to: formData.email,
                        subject: 'אישור הזמנת נסיעה - מסיעי דימונה',
                        html: `
                            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; direction: rtl;">
                                <h2 style="color: #1976d2; text-align: center;">תודה על הזמנת הנסיעה!</h2>
                                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                                    <p>שלום ${formData.fullName},</p>
                                    <p>קיבלנו את פרטי ההזמנה שלכם ונחזור אליכם בהקדם.</p>
                                    <h3>פרטי ההזמנה:</h3>
                                    <p><strong>תאריך:</strong> ${formData.date} בשעה ${formData.time}</p>
                                    <p><strong>מ-${formData.pickupLocation} ל-${formData.destination}</strong></p>
                                    <p><strong>מספר נוסעים:</strong> ${formData.passengers}</p>
                                    <p><strong>סוג שירות:</strong> ${serviceTypeLabel}</p>
                                </div>
                                <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; text-align: center;">
                                    <p><strong>לשאלות ועדכונים צרו קשר:</strong></p>
                                    <p>📞 טלפון: 08-6566234</p>
                                    <p>📧 אימייל: info@dimona-transport.co.il</p>
                                </div>
                                <p style="text-align: center; color: #666; margin-top: 20px;">
                                    תודה שבחרתם במסיעי דימונה!
                                </p>
                            </div>
                        `,
                        text: `תודה על הזמנת הנסיעה! קיבלנו את פרטי ההזמנה ונחזור אליכם בהקדם. פרטי ההזמנה: ${formData.date} בשעה ${formData.time}, מ-${formData.pickupLocation} ל-${formData.destination}. לשאלות: 08-6566234`
                    })
                });
            }

            console.log('נתוני הזמנה נשלחו בהצלחה:', formData);

            setShowSuccess(true);

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
            alert('שגיאה בשליחת ההזמנה, אנא נסו שוב מאוחר יותר');
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
                        <Stack spacing={3}>
                            {/* שורה ראשונה - שם ואימייל */}
                            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
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
                                />

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
                                />
                            </Box>

                            {/* אימייל */}
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
                            />

                            {/* שורה שנייה - מיקומים */}
                            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
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
                                />

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
                                />
                            </Box>

                            {/* שורה שלישית - תאריך ושעה */}
                            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
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
                            </Box>

                            {/* שורה רביעית - נוסעים וסוג שירות */}
                            <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
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

                                <FormControl fullWidth error={!!errors.serviceType} required>
                                    <InputLabel>סוג שירות</InputLabel>
                                    <Select
                                        value={formData.serviceType}
                                        onChange={handleSelectChange}
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
                            </Box>

                            {/* הערות */}
                            <TextField
                                fullWidth
                                label="הערות נוספות"
                                multiline
                                rows={4}
                                value={formData.notes}
                                onChange={handleInputChange('notes')}
                                placeholder="פרטים נוספים, דרישות מיוחדות, וכו'"
                            />

                            {/* כפתור שליחה */}
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
                        </Stack>
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
