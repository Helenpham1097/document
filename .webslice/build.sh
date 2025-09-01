#!/bin/bash
# Build Script for Webslice deploy
echo "Starting Build Script"

# Print command output for each command and exit immediately if any command fails (https://man7.org/linux/man-pages/man1/set.1p.html)
set -ex

cp .env.example .env
COMPOSER_PROCESS_TIMEOUT=2000 composer install --no-interaction -vvv --no-dev --prefer-dist --optimize-autoloader
npm ci --cache .npm --prefer-offline
npm run build:prod
php artisan key:generate

echo "Inserting env vars and config"
# HACK: Single quotes intentionally used so the environment variables aren't used, instead the literal strings
# e.g. APP_URL="http://${MYHOST_URL}" not APP_URL=https://blahblah.com
sed -i 's|^APP_URL=.*$|APP_URL=${MYHOST_URL}|g' .env
sed -i 's|^STATAMIC_STATIC_CACHING_STRATEGY=.*$|STATAMIC_STATIC_CACHING_STRATEGY=full|g' .env

echo "Build Script Finished Successfully"