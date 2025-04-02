#!/bin/bash -e

# Update package index
sudo apt-get update
# Install packages to allow apt to use a repository over HTTPS
sudo apt-get -yq install apt-transport-https ca-certificates curl software-properties-common expect
# Update package index
sudo apt-get update
# Quietly install packages
sudo apt-get -yq install npm yarn
# Output some versions
docker --version
echo npm $(npm --version)
# Install nvm to allow convenient and precise node js version selection
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
# These line are ot need if you restart terminal
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# Install desired node version
nvm install 18.20.7
echo node $(node --version)