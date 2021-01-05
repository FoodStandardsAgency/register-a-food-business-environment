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
# Create blank .env and init files ready to paste contents from secure location
touch .env-front-end
touch .env-registration-service
touch .env-collections-service
touch config-db/mongo-init.js
