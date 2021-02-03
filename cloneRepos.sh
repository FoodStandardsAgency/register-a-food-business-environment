#!/bin/bash

git clone https://github.com/FoodStandardsAgency/register-a-food-business-service.git
git clone https://github.com/FoodStandardsAgency/register-a-food-business-front-end.git
git clone https://github.com/FoodStandardsAgency/register-a-food-business-collections-service.git
git clone https://github.com/FoodStandardsAgency/register-a-food-business-validation.git
git clone https://github.com/FoodStandardsAgency/register-a-food-business-UI-tests.git

# Login to npm to allow private packages to be obtained (this will prompt for credentials)
echo "Enter npm credentials when prompted"
npm login
# Install npm packages
cd register-a-food-business-collections-service
git checkout develop
npm install
cd ..
cd register-a-food-business-service
git checkout develop
npm install
cd ..
cd register-a-food-business-front-end
git checkout develop
yarn install
cd ..
cd register-a-food-business-validation
git checkout develop
yarn install
cd ..
cd register-a-food-business-UI-tests
git checkout develop
yarn install
cd ..
# Create .env and init files ready to paste an missing contents from secure location
cp .env-front-end.dist .env-front-end
cp .env-registration-service.dist .env-registration-service
cp .env-collections-service.dist .env-collections-service
cp .env.dist .env
touch config-db/mongo-init.js
