#!/bin/bash

CURRENT_DIR=$(pwd)

# add TLE converter
cd applications/main/server/api/czml
JAVA_PROJECT="military_ed__tle_to_cartesian"
rm -rf $JAVA_PROJECT
git clone https://github.com/svr93/$JAVA_PROJECT

cd $CURRENT_DIR

# install dependencies
npm i
