#!/bin/bash
    /home/node/npminit.sh &&
    cd /usr/src/rafbs &&
    npm install --maxsockets 10 --verbose  --ignore-engines --prefer-offline --no-audit &&

    cd /usr/src/rafbcs &&
    npm install --maxsockets 10 --verbose  --ignore-engines --prefer-offline --no-audit &&

    cd /usr/src/rafbfe &&
  npm install --maxsockets 10 --verbose  --ignore-engines --prefer-offline --no-audit