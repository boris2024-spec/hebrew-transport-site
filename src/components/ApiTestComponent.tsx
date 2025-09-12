import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography,
    Alert,
    TextField,
    CircularProgress,
    Stack
} from '@mui/material';
import { emailService } from '../services/emailService';

const ApiTestComponent: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<string>('');
    const [testEmail, setTestEmail] = useState('test@example.com');

    const testHealth = async () => {
        setIsLoading(true);
        setResult('');

        try {
            const response = await emailService.checkHealth();
            setResult(`✅ API Health Check: ${JSON.stringify(response, null, 2)}`);
        } catch (error) {
            setResult(`❌ Health Check Error: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    const testSendEmail = async () => {
        setIsLoading(true);
        setResult('');

        try {
            const response = await emailService.sendEmail({
                to: testEmail,
                subject: 'Test Email from Frontend',
                html: '<h1>Test Email</h1><p>This is a test email sent from the frontend application.</p>',
                text: 'Test Email - This is a test email sent from the frontend application.'
            });
            setResult(`✅ Email Sent: ${JSON.stringify(response, null, 2)}`);
        } catch (error) {
            setResult(`❌ Send Email Error: ${error}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    API Test Component
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph>
                    Current API URL: <strong>{emailService.getBaseURL()}</strong>
                </Typography>

                <Stack spacing={2}>
                    <Button
                        variant="contained"
                        onClick={testHealth}
                        disabled={isLoading}
                        startIcon={isLoading ? <CircularProgress size={20} /> : null}
                    >
                        Test Health Endpoint
                    </Button>

                    <Box>
                        <TextField
                            fullWidth
                            label="Test Email Address"
                            value={testEmail}
                            onChange={(e) => setTestEmail(e.target.value)}
                            type="email"
                            size="small"
                            sx={{ mb: 1 }}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={testSendEmail}
                            disabled={isLoading || !testEmail}
                            startIcon={isLoading ? <CircularProgress size={20} /> : null}
                        >
                            Test Send Email
                        </Button>
                    </Box>

                    {result && (
                        <Alert
                            severity={result.startsWith('✅') ? 'success' : 'error'}
                            sx={{ mt: 2 }}
                        >
                            <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px' }}>
                                {result}
                            </pre>
                        </Alert>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
};

export default ApiTestComponent;