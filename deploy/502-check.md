# 502 Bad Gateway — проверка

На сервере выполни по шагам:

## 0. Есть ли production-сборка (.next)

Next.js не запустится без `next build`. Если в логах PM2 ошибка *"Could not find a production build in the '.next' directory"*:

```bash
cd ~/licorice-kingdom-turkmenistan/client
npm run build
pm2 restart turkmen-licorice-client
```

Или из корня репо одной командой:  
`./deploy/build-and-restart.sh` (предварительно: `chmod +x deploy/build-and-restart.sh`).

## 1. Запущено ли приложение на 3014

```bash
pm2 list
```

Должен быть процесс **turkmen-licorice-client** в статусе `online`. Если его нет или он `stopped`/`errored`:

```bash
cd ~/licorice-kingdom-turkmenistan/client
pm2 start ecosystem.config.js
pm2 save
```

Если в списке есть старый **licorice-client** и это тот же проект — можно его удалить:  
`pm2 delete licorice-client` и потом запустить `ecosystem.config.js` из client.

## 2. Слушает ли кто-то порт 3014

```bash
ss -tlnp | grep 3014
# или
curl -I http://127.0.0.1:3014
```

Если `curl` даёт ответ (HTTP 200/304 и т.д.) — приложение живое, проблема в nginx. Если «Connection refused» — приложение не слушает 3014 (не запущено или другой порт).

## 3. Nginx и HTTPS

Запрос шёл по **https** (порт 443). Конфиг в репо — только для порта 80. Блок для 443 обычно добавляет certbot или лежит в отдельном файле. Проверь:

```bash
sudo grep -r "3014\|turkmen-licorice" /etc/nginx/
```

Убедись, что в блоке `listen 443 ssl` для turkmen-licorice тоже стоит `proxy_pass http://127.0.0.1:3014;`.

После правок:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## 4. Логи

```bash
pm2 logs turkmen-licorice-client
sudo tail -20 /var/log/nginx/error.log
```

По ним видно падения приложения или отказы nginx при обращении к upstream.
