#!/bin/bash
/home/node/npminit.sh &&
cd /usr/src/rafbs &&
npm install  &&

cd /usr/src/rafbcs &&
npm install &&

cd /usr/src/rafbfe &&
npm install