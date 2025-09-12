// Сервис для работы с email API
export interface EmailData {
    to: string;
    subject: string;
    html: string;
    text?: string;
}

export interface ApiResponse {
    ok: boolean;
    error?: string;
}

class EmailService {
    private readonly baseURL: string;

    constructor() {
        // Для локальной разработки используем localhost, для продакшена - Vercel API
        this.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
    }

    /**
     * Отправка email через API
     */
    async sendEmail(emailData: EmailData): Promise<ApiResponse> {
        try {
            const response = await fetch(`${this.baseURL}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emailData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || `HTTP error! status: ${response.status}`);
            }

            return result;
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }

    /**
     * Проверка работоспособности API
     */
    async checkHealth(): Promise<ApiResponse> {
        try {
            const response = await fetch(`${this.baseURL}/health`);
            const result = await response.json();

            if (!response.ok) {
                throw new Error(`Health check failed: ${response.status}`);
            }

            return result;
        } catch (error) {
            console.error('Health check failed:', error);
            throw error;
        }
    }

    /**
     * Получить базовый URL API
     */
    getBaseURL(): string {
        return this.baseURL;
    }
}

// Экспортируем единственный экземпляр сервиса
export const emailService = new EmailService();

export default emailService;