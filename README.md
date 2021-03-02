# Полезный кабинет

## Архитектура

Архитектурно приложение разбивается слой бизнес-логики (репозитории, службы, сущности, варианты использования) и слой представления (react компопненты)

Внутри каждого слоя разбика идет на логику ядра (core) и логику приложения (app)

* src - слой бизнес-логики
* * core - ядро платформы
* * * repositories - слой доступа к данным [ядро]
* * * adapters - адаптеры внешних данных [ядро]
* * * services - службы - публичный интерфейс [ядро]
* * * usecases - варианты использования [ядро]
* * app - логика приложения
* * * repositories - слой доступа к данным [приложение]
* * * adapters - адаптеры внешних данных [приложение]
* * * services - службы - публичный интерфейс [приложение]
* * * usecases - варианты использования [приложение]
* components - слой представления
* * core - компоненты ядра
* * app - компоненты приложения
* pages - страницы приложениы


## Установка

### Создать базу данных

Создать базу данных, используя скрипт schema.pg.sql 

```bash
cat sql/schema.pg.sql | sudo -u postgres psql
```
### Создать .env файл

```bash
echo 'DATABASE_URL="postgresql://helpfulcabinet:helpfulcabinet@localhost/helpfulcabinet"' > .env
```

### Создать таблицы

```bash
npx prisma db push --preview-feature
```

### Prisma Studio

```bash
npx prisma studio
```

## Администрирование

### Запуск pgadmin в docker

```
docker run --rm -e PGADMIN_DEFAULT_EMAIL=admin@localhost -e PGADMIN_DEFAULT_PASSWORD=admin -e PGADMIN_LISTEN_PORT=5050 --network="host" -d dpage/pgadmin4
```

После запуска открываем localhost:5050, логинимся с admin@localhost / admin,
добавляем сервер localhost
TODO: хранение настроек серверов