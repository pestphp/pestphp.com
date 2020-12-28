#!/bin/bash

if [ ! -f composer.json ]; then
    echo "Please make sure to run this script from the root directory of this repo."
    exit 1
fi

./vendor/bin/sail composer install
cp .env.example .env
./vendor/bin/sail artisan key:generate
source "$(dirname "$0")/checkout_latest_docs.sh"
./vendor/bin/sail npm install
./vendor/bin/sail npm run prod