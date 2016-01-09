'use strict';

require('impress');

var argv = require('yargs').argv;
var assignSafe = require('./assign-safe.js');

assignSafe(process.env, JSON.parse(argv.exchangeData));
console.log('process.env:', process.env);

impress.server.start();
