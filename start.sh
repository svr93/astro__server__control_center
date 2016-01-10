#!/bin/bash

DEFAULT_PORT="8011"
exchangeData=""

while [[ $1 != "" ]]; do

    case $1 in

        --exchangeData )            shift
                                    exchangeData=$1
                                    ;;

        * )                         echo "error: bad param"
                                    ;;
    esac
    shift
done

exchangeDataPort=$(echo $exchangeData | \
    grep CONTROL_CENTER_PORT | \
    cut -d "}" -f1 | \
    cut -d "," -f1 | \
    cut -d ":" -f2)

if [[ $exchangeDataPort = "" ]]; then

    exchangeDataPort=$DEFAULT_PORT
fi
sed -E "s/port:[ ]*[\"0-9]+/port: $exchangeDataPort/" config/servers.js > \
config/servers.js.bak

mv config/servers.js.bak config/servers.js

node server.js --exchangeData="$exchangeData"
