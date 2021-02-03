
# Register a food business environment 
This repo enables you to set up a full local environment for the register a food business service. This will consist of:
- Front end
- Registrations service
- Collections service
- Temp store DB
- Front end cache DB
- Back end cache DB
- Config DB
- UI testing / selenium

This allows a developer to test and validate new features in a full local environment before releasing them. It also speeds up onboarding of new developers.

## Getting started

- Verify Docker and docker-compose are installed. 
- Run `setup-packages.sh` to install yarn, npm, nvm etc. The above script will also create the following files:
  - .env
  - .env-collections-service
  - .env-front-end
  - .env-registration-service
- Complete missing values:
  - NPM_TOKEN can be generated from your NPM account, but requires membership of the slice-and-dice team to work properly.
  - A Browserstack account is needed to get BROWSERSTACK_KEY and BROWSERSTACK_USER.
  - Check the REGISTRATION_DATA_VERSION is up-to-date (check staging config database).
  - Remember to make sure the proxy details must be blank unless running behind a proxy. Ignore the warnings from npm/yarn
- Run the following command: `./cloneRepos.sh`. This will clone the other repositories and check out the develop branches.
- Run the following command: `./init_docker.sh`. This will take a few minutes the first time, but after that you can simply run `docker-compose up -d` to start a new environment or individual services. 
- Verify the front-end is running by navigating to http://localhost:3000/new/cardiff. This may take a minute before it works, possibly due to Docker containers still starting up.

## Resetting to defaults
The platform can be reset to defaults using 

`./reset.sh`

The platform can be hard reset by 

`./reset.sh && docker system prune -a --volumes -f` -- this will wipe everything... and takes a while to run.

Consult the docker-compose.yml file for ports and details.

## Miscellaneous
We recommend [Postman](https://www.getpostman.com/) to test the APIs on ports 4000 / 4001, [TablePlus](https://tableplus.io/) to view the temp store on 5432, and [Robo 3T](https://robomongo.org/) to look at the databases on ports 27017-27019, but of course these technology choices are up to the developer. 

Instructions on how to build, test, and update each individual application can be found in their own README and contribution guides.

If you want to start a single container (such as the temp store db) in order to test that with a feature you're working on, you can run `docker-compose up <container-name>` where `<container-name>` is the service name specified in `docker-compose.yml` e.g. `temp-store` or `back-end-cache-db`

## UI testing
run `./reset.sh && ./init_docker.sh && ./init_selenium.sh`

Shell in to the UI tests container and run whatever command you desire, See the UI readme for more details.