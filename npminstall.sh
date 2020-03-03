#!/bin/bash

    cd /usr/src/rafbs;
    echo `pwd`;

    ls -lah;

    echo "//registry.npmjs.org/:_authToken=a96c1e30-8f99-4e1c-90f6-dfd006731544" > .npmrc && \
    npm config set proxy "http://docker.for.win.localhost:3128" && \
    npm config set https-proxy "http://docker.for.win.localhost:3128" && \
    npm config set progress=false && \
    npm config set strict-ssl false && \
    npm config set cache /opt/npmcache && \
    npm config set registry https://registry.npmjs.org/ && \
    npm install --maxsockets 10 --verbose  --ignore-engines --prefer-offline --no-audit &&

    cd /usr/src/rafbcs &&

    echo "//registry.npmjs.org/:_authToken=a96c1e30-8f99-4e1c-90f6-dfd006731544" > .npmrc && \
    npm config set proxy "http://docker.for.win.localhost:3128" && \
    npm config set https-proxy "http://docker.for.win.localhost:3128" && \
    npm config set progress=false && \
    npm config set strict-ssl false && \
    npm config set cache /opt/npmcache && \
    npm config set registry https://registry.npmjs.org/ && \
    npm install --maxsockets 10 --verbose  --ignore-engines --prefer-offline --no-audit &&

    cd /usr/src/rafbfe &&

    echo "//registry.npmjs.org/:_authToken=a96c1e30-8f99-4e1c-90f6-dfd006731544" > .npmrc && \
    npm config set proxy "http://docker.for.win.localhost:3128" && \
    npm config set https-proxy "http://docker.for.win.localhost:3128" && \
    npm config set progress=false && \
    npm config set strict-ssl false && \
    npm config set cache /opt/npmcache && \
    npm config set registry https://registry.npmjs.org/ && \
    npm install --maxsockets 10 --verbose  --ignore-engines --prefer-offline --no-audit