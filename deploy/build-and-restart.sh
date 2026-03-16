#!/usr/bin/env bash
# Сборка Next.js и перезапуск PM2 (turkmen-licorice-client).
# Запускать из корня репо: ./deploy/build-and-restart.sh

set -e
cd "$(dirname "$0")/../client"
echo "Building..."
npm run build
echo "Restarting PM2..."
pm2 restart turkmen-licorice-client
echo "Done."
