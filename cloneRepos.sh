#!/bin/bash

git clone https://github.com/FoodStandardsAgency/register-a-food-business-service.git registrations
git clone https://github.com/FoodStandardsAgency/register-a-food-business-front-end.git frontend
git clone https://github.com/FoodStandardsAgency/register-a-food-business-UI-tests.git uitests
git clone https://github.com/FoodStandardsAgency/register-a-food-business-validation.git validation
git clone https://github.com/FoodStandardsAgency/register-a-food-business-wiki.git adminportal
git clone https://github.com/FoodStandardsAgency/register-a-food-business-wiki.wiki.git wiki

npm config set //registry.npmjs.org/:_authToken=$NPM_TOKEN

# Install npm packages
cd registrations
git checkout develop
npm install
cd ..
cd frontend
git checkout develop
npm install
cd ..
cd validation
git checkout develop
npm install
cd ..
cd uitests
git checkout develop
npm install
cd ..
# Create .env and init files ready to paste an missing contents from secure location
cp .env-front-end.dist .env-front-end
cp .env-registration-service.dist .env-registration-service
cp .env-collections-service.dist .env-collections-service
cp .env.dist .env
