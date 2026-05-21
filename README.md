# Register a food business environment

This repo enables you to set up a full local environment for the register a food business service. This will consist of:

- Front end
- Registrations service
- Collections service
- Front end cache DB
- Registration DB
- Config DB
- UI testing / Selenium
- Admin pages

This allows a developer to test and validate new features in a full local environment before releasing them. It also speeds up onboarding of new developers.

Docker is used for convenience. Podman can be used instead, and there are some scripts with `podman` in the name, but those are not actively maintained.

## Prerequisites

- Windows with WSL2 enabled
- Docker installed with WSL2 integration enabled
- `docker-compose` available, or Docker Desktop with the `docker compose` plugin
- Git installed
- Membership of the FSA GitHub org for repository cloning
- NPM access token (requires membership of the `slice-and-dice` NPM team)

Clone this repository inside WSL (for example Ubuntu), not from a Windows-mounted path.

## Getting started

- If developing on Windows, enable WSL - this should be done and working before installing Docker.
- Verify Docker and docker-compose are installed. On Windows, you will need to enable WSL2 integration and maybe run `Add-LocalGroupMember -Group "docker-users" -Member $env:UserName` and restart to add user to group.
- Before proceeding, ensure you are a member of the FSA GitHub org if you want all repos to clone correctly.
- Note that this repository should be cloned to the WSL installation eg. Ubuntu and subsequent steps should be enacted there.
- Run `./setup-packages.sh` to install npm, nvm etc.
- Close the terminal and start a new session.
- Obtain an NPM access token, which can be generated from your NPM account: this requires membership of the slice-and-dice team to work properly.
- Run the following command: `export NPM_TOKEN=your_token_here`
- Run the following command: `./cloneRepos.sh`. This will clone the other repositories and check out the develop branches. The script will also create the following files:
  - .env
  - .env-collections-service
  - .env-front-end
  - .env-registration-service
- Complete missing values in these files:
  - NPM_TOKEN should be set to the same npm access token as above.
  - A Browserstack account is needed to get BROWSERSTACK_KEY and BROWSERSTACK_USER.
  - Remember to make sure the proxy details must be blank unless running behind a proxy. Ignore the warnings from npm/yarn
- Run the following command: `./init_docker.sh`. This will take a few minutes the first time, but after that you can simply run `docker-compose up -d` to start a new environment or individual services.
- Verify the front-end is running by navigating to http://localhost:3000/new/cardiff. This may take a minute before it works, possibly due to Docker containers still starting up.

## Resetting to defaults

The platform can be reset to defaults using

`./reset.sh`

- Hard reset:

  `./reset.sh && docker system prune -a --volumes -f`

  This will remove all local Docker containers, images, networks, and volumes.

Consult `docker-compose.yml` for service names, ports, and additional details.

## Miscellaneous

We recommend [Postman](https://www.getpostman.com/) to test the APIs on ports 4000 / 4001, [TablePlus](https://tableplus.io/) to view the temp store on 5432, and [Robo 3T](https://robomongo.org/) to look at the databases on ports 27017-27019, but of course these technology choices are up to the developer.

## Recommended tools

If you want to start a single container (such as the temp store db) in order to test that with a feature you're working on, you can run `docker compose up <container-name>` where `<container-name>` is the service name specified in `docker-compose.yml` e.g. `temp-store` or `back-end-cache-db`

## UI testing

Run:

`./reset.sh && ./init_docker.sh && ./init_selenium.sh`

Then shell into the UI tests container and run the desired commands. See the UI README for more details.
