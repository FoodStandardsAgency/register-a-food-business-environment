#!/usr/bin/env bash
DIR=$(realpath "$(dirname "${BASH_SOURCE[0]}")")
cd $DIR &&

sudo docker network create rafb || true &&
sudo docker-compose -f ./docker-compose-selenium.yml up -d --build;