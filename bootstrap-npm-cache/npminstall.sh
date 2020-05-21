#!/bin/bash
    /home/node/npminit.sh &&
    cd /usr/src/rafbs &&
    npm install --maxsockets 10 --verbose  --prefer-offline --no-audit &&

    cd /usr/src/rafbcs &&
    npm install --maxsockets 10 --verbose  --prefer-offline --no-audit &&

    cd /usr/src/rafbfe &&
    yarn install --verbose --prefer-offline