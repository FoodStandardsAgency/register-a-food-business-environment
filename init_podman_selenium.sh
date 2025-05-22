#!/usr/bin/env bash
DIR=$(realpath "$(dirname "${BASH_SOURCE[0]}")")
cd $DIR &&

sudo podman network create rafb || true &&
sudo podman-compose -f ./docker-compose-selenium.yml up -d --build;