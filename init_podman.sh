#!/usr/bin/env bash
sudo podman network rm rafb || true &&
sudo podman network create rafb || true &&
sudo podman-compose build &&
sudo podman-compose up bootstrap-npm-install &&
sudo podman-compose up -d;