# Архитектура практического проекта Next.js

## Структура проекта

public/ # Статические файлы (изображения, шрифты)
src/ # Исходный код приложения
app/ # Основные маршруты приложения (App Router)
components/ # UI компоненты
lib/ # Вспомогательные библиотеки, конфиги, хуки
pages/ # Компоненты страниц
shared/ # Общие UI компоненты, переиспользуемые компоненты
styles/ # Глобальные стили

### `src/lib/`
Вспомогательные модули:
- Настройки приложения (`config`)
- API - функции (`api`)
- Кастомные хуки (`hooks`)
- типизация
- redux

## Библиотеки:

RTK (Redux Toolkit)

React Yandex Maps (github.com/R1ZEN/react-yandex-maps)

classnames (github.com/JedWatson/classnames)

sass (github.com/sass/dart-sass)


## Возможные ошибки запуска клиента:

1) Установка шрифтов `import { Montserrat } from 'next/font/google';`
 Фикс: отключение в компоненте layout.tsx/ или очистки кеша .next/

2) Установка node-modules (из-за React Yandex Maps) могут возникнуть проблемы npm i --force точно поможет
