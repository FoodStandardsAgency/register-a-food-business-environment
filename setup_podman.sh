#!/usr/bin/env bash
sudo apt install podman && 
sudo apt install python3-pip &&
sudo apt install podman-compose &&
PATH=$PATH:/home/$USER/.local/bin &&
sudo sh -c "echo '  \"mongo\" = \"docker.io/library/mongo\"' >> /etc/containers/registries.conf.d/shortnames.conf" &&
sudo update-alternatives --set iptables /usr/sbin/iptables-legacy &&
sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy;