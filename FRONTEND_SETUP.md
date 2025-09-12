# Настройка фронтенда для работы с Backend API

## 📋 Что нужно изменить во фронтенде

### 1. Переменные окружения

Создайте файл `.env.local` в корне React приложения:

```bash
# Для локальной разработки
REACT_APP_API_URL=http://localhost:3001

# Для продакшена (после деплоя backend на Vercel)
# REACT_APP_API_URL=https://your-backend.vercel.app/api
```

### 2. Обновленные файлы

#### ✅ Уже обновлены:
- `src/services/emailService.ts` - Сервис для работы с API
- `src/pages/BookingPage.tsx` - Обновлен для использования нового сервиса
- `.env.example` - Пример переменных окружения
- `.env.local` - Локальные переменные окружения

### 3. Как это работает

#### Локальная разработка:
1. Запустите backend: `cd back/server && npm run dev`
2. Запустите frontend: `cd hebrew-transport-site && npm start`
3. Frontend будет отправлять запросы на `http://localhost:3001`

#### Продакшен:
1. Задеплойте backend на Vercel
2. Обновите `.env.local`: `REACT_APP_API_URL=https://your-backend.vercel.app/api`
3. Задеплойте frontend на Vercel
4. Обновите переменную `CLIENT_ORIGIN` в backend на домен фронтенда

### 4. Тестирование

#### Проверка health endpoint:
```javascript
import { emailService } from './src/services/emailService';

// Проверить работоспособность API
emailService.checkHealth()
  .then(result => console.log('API работает:', result))
  .catch(error => console.error('API недоступен:', error));
```

#### Отправка тестового email:
```javascript
emailService.sendEmail({
  to: 'test@example.com',
  subject: 'Test',
  html: '<p>Test message</p>',
  text: 'Test message'
})
.then(result => console.log('Email отправлен:', result))
.catch(error => console.error('Ошибка отправки:', error));
```

### 5. Обновление для продакшена

После деплоя backend на Vercel:

1. **Обновите `.env.local`:**
```bash
REACT_APP_API_URL=https://your-backend.vercel.app/api
```

2. **Обновите переменные в Vercel (backend):**
```bash
CLIENT_ORIGIN=https://your-frontend.vercel.app
```

3. **Redeploy обе части приложения**

### 6. Структура сервиса

Сервис `emailService` предоставляет:
- `sendEmail(emailData)` - отправка email
- `checkHealth()` - проверка работоспособности API
- `getBaseURL()` - получение текущего API URL

### 7. Обработка ошибок

Сервис автоматически обрабатывает:
- Сетевые ошибки
- HTTP ошибки (4xx, 5xx)
- JSON парсинг
- Логирование ошибок в консоль

## ✅ Готово!

Теперь ваш фронтенд готов для работы с backend API как локально, так и на Vercel!