#!/usr/bin/env bash
sudo docker network rm rafb || true &&
sudo docker network create rafb || true &&
sudo docker-compose build &&
sudo docker-compose up bootstrap-npm-install &&
sudo docker-compose up -d;

