#!/usr/bin/env bash

DIR=$(realpath "$(dirname "${BASH_SOURCE[0]}")")
cd $DIR &&

sudo docker-compose down --remove-orphans &&
sudo docker-compose -f docker-compose-selenium.yml down --remove-orphans &&
sudo docker volume prune -f &&
sudo docker network prune -f &&
sudo rm -Rf ./var/npm/*;