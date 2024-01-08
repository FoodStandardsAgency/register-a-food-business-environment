#!/bin/bash -e

# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Install docker and docker-compose
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-pluginvvvvvvvvvvvvv

# Add user to docker group
sudo usermod -aG docker $USER

# Update package index
sudo apt-get update
# Install packages to allow apt to use a repository over HTTPS
sudo apt-get -yq install apt-transport-https ca-certificates curl software-properties-common expect
# Add Yarn's GPG key
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
# Add Yarn repository
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
# Update package index
sudo apt-get update
# Quietly install packages
sudo apt-get -yq install npm yarn
# Output some versions
docker --version
echo yarn $(yarn --version)
echo npm $(npm --version)
# Install nvm to allow convenient and precise node js version selection
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
# These line are ot need if you restart terminal
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# Install desired node version
nvm install 18.16.0
echo node $(node --version)