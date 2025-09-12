# 🔧 Исправление manifest.json ошибки

## Проблема
```
GET https://mdimona-cahnqf9ph-boris-projects-342aa06a.vercel.app/manifest.json 401 (Unauthorized)
```

## Решение

Создайте или обновите файл `public/manifest.json` в React приложении:

```json
{
  "short_name": "Dimona Transport",
  "name": "Dimona Transportation Services",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "transport.png",
      "type": "image/png",
      "sizes": "192x192"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#1976d2",
  "background_color": "#ffffff",
  "orientation": "portrait-primary"
}
```

## Примечание
Эта ошибка не критична и не влияет на работу форм отправки email. 
Основная проблема - это CORS настройки в backend.