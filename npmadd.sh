#!/bin/bash
/home/node/npminit.sh &&
cd cd /usr/src/$1 &&
npm install --maxsockets 10 --verbose  --ignore-engines --prefer-offline --no-audit
