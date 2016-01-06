'use strict';

require('impress');

var argv = require('yargs').argv;
impress.__exchangeData = JSON.parse(argv.exchangeData);

impress.server.start();
