
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

Before you start, you'll need Docker and docker-compose installed and some files containing secrets and passwords. The files you'll need are:
- .env
- .env-collections-service
- .env-front-end
- .env-registration-service


Copy the .env*.dist files and remove the postfix.

Ask another developer on Register a food business for any missing values (e.g. NODE TOKEN)

Remember to clear the proxy details if you are running on linux - they must be blank. Ignore the warnings from npm/yarn

Once you've got these, as well as Docker Compose installed, there are two steps to get the environment running:

`./init_docker.sh`

This will take a few minutes the first time, but after that you can simply run `docker-compose up -d` to start a new environment or individual services. 

The platform can be reset to defaults using 

`./reset.sh`

The platform can be hard reset by 

`./reset.sh && docker system prune -a --volumes -f` -- this will wipe everything... and takes a while to run.

Consult the docker-compose.yml file for ports and details.

We recommend [Postman](https://www.getpostman.com/) to test the APIs on ports 4000 / 4001, [TablePlus](https://tableplus.io/) to view the temp store on 5432, and [Robo 3T](https://robomongo.org/) to look at the databases on ports 27017-27019, but of course these technology choices are up to the developer. 

Instructions on how to build, test, and update each indiviudal application can be found in their own README and contribution guides.

If you want to start a single container (such as the temp store db) in order to test that with a feature you're working on, you can run `docker-compose up <container-name>` where `<container-name>` is the service name specified in `docker-compose.yml` e.g. `temp-store` or `back-end-cache-db`


# UI testing
run `./reset.sh && ./init_docker.sh && ./init_selenium.sh`

Shell in to the UI tests container and run whatever command you desire, See the UI readme for more details.