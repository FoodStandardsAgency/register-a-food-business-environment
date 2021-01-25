#!/bin/bash -e

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
nvm install 12.13.0
echo node $(node --version)
# Install Azure CLI prerequisites - these may not be needed now
# sudo apt-get install apt-transport-https lsb-release software-properties-common dirmngr -y
# Add CLI repository
AZ_REPO=$(lsb_release -cs)
echo "deb [arch=amd64] https://packages.microsoft.com/repos/azure-cli/ $AZ_REPO main" | sudo tee /etc/apt/sources.list.d/azure-cli.list
# Add MS GPG key - doesn't seem to be needed anymore
# sudo apt-key --keyring /etc/apt/trusted.gpg.d/Microsoft.gpg adv --keyserver packages.microsoft.com --recv-keys BC528686B50D79E339D3721CEB3E94ADBE1229CF
# Update sources and install CLI
sudo apt-get update
sudo apt-get install azure-cli