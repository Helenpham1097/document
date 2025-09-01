#!/bin/bash
# Deploy Script for Webslice deploy

# exit immediately if any command fails
set -e

echo "Clearing Config/Cache & Warming"

# Warm the static file cache
php artisan optimize:clear && php artisan optimize && php please stache:refresh && php please static:warm

echo "Warming Cache Complete"