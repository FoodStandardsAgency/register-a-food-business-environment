#!/bin/bash
/home/node/npminit.sh &&
DIR=$1;
echo cd /usr/src/$DIR
cd /usr/src/$DIR &&
shift;
echo npm install --maxsockets 10 --verbose  --ignore-engines --prefer-offline --no-audit $@
npm install --maxsockets 10 --verbose  --ignore-engines --prefer-offline --no-audit $@
