#!/bin/bash
    rm -f ~/.npmrc && \
    cd /usr/src/rafbs &&
    rm -f .npmrc && \
    cd /usr/src/rafbcs &&
    rm -f .npmrc &&
    cd /usr/src/rafbfe &&
    rm -f .npmrc &&

    npm config set -g proxy "http://docker.for.win.localhost:3128" && \
    npm config set -g https-proxy "http://docker.for.win.localhost:3128" && \
    npm config set -g progress=false && \
    npm config set -g strict-ssl false && \
    npm config set -g cache /opt/npmcache && \
    npm config set -g registry https://registry.npmjs.org/ && \
    npm config set -g '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}" && \
    npm config ls --long


