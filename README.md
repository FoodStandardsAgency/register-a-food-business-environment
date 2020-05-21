
# Register a food business environment 
This repo enables you to set up a full local environment for the register a food business service. This will consist of:
- Front end
- Registrations service
- Collections service
- Temp store DB
- Front end cache DB
- Back end cache DB
- Config DB

This allows a developer to test and validate new features in a full local environment before releasing them. It also speeds up onboarding of new developers.

## Getting started

Before you start, you'll need [Docker Compose](https://docs.docker.com/compose/install/) and some files containing secrets and passwords. The files you'll need are:
- .env
- .env-collections-service
- .env-front-end
- .env-registration-service


Copy the .env*.dist files and remove the postfix.

Ask another developer on Register a food business for any missing values (e.g. NODE TOKEN)

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

## Suggested workflow

While it is up to the developer how to build new features on their own software, the workflow we find to be optimal in this case is to build and test a new feature / bugfix in the associated repository on a branch, then push that branch. Once this is done, you can update the `cloneRepos.sh` script with the new branch name e.g. 

```git clone -b my-feature --single-branch https://github.com/FoodStandardsAgency/register-a-food-business-service.git```

Then run the clone repos script to pull down the new code you've developed. At this point you can run `docker-compose up --build` to create a full environment to validate your suggested change. Once you're satisfied with the change, it's then time to make a Pull Request in the appropriate repository.

## Useful links
For more information on Docker Compose and useful commands see: 
- https://docs.docker.com/compose/overview/

To see information about the Docker images used in this project: 
- https://hub.docker.com/_/mongo/
- https://hub.docker.com/_/node/
- https://hub.docker.com/_/postgres/

